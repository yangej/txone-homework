import LineChart from '../../common/components/LineChart';

const FEMALE_LINE_COLOR = '#E86997';
const MALE_LINE_COLOR = '#80B4FF';

const Y_AXIS_TICKS = [50000, 60000, 70000, 80000, 90000, 100000, 110000];

export type PopulationChartData = {
  year: string;
  male: number;
  female: number;
};

interface Props {
  data: PopulationChartData[];
}

const PopulationChart = ({ data }: Props) => {
  return (
    <LineChart
      data={data}
      containerProps={{ width: 448, height: 325 }}
      xAxisProps={{ dataKey: 'year' }}
      yAxisProps={{
        ticks: Y_AXIS_TICKS,
        tickFormatter: (value) => `${Math.floor(value / 1000)}k`,
      }}
      linesProps={[
        { dataKey: 'male', stroke: MALE_LINE_COLOR },
        { dataKey: 'female', stroke: FEMALE_LINE_COLOR },
      ]}
    />
  );
};

export default PopulationChart;
