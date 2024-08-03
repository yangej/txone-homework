import {
  CartesianGrid,
  Legend,
  Line,
  LineProps,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  ResponsiveContainerProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
} from 'recharts';

import LineChartLegend from './LineChartLegend';

interface Props {
  data: Record<string, any>[];
  linesProps: Omit<LineProps, 'ref'>[];
  containerProps?: Omit<ResponsiveContainerProps, 'children'>;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
}

const LineChart = ({
  data,
  containerProps,
  xAxisProps,
  yAxisProps,
  linesProps,
}: Props) => {
  return (
    <ResponsiveContainer {...containerProps}>
      <RechartsLineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          tick={{ fontSize: '12px' }}
          axisLine={false}
          tickLine={false}
          padding={{ left: 30, right: 30 }}
          tickMargin={10}
          {...xAxisProps}
        />
        <YAxis
          domain={['dataMin', 'dataMax']}
          tick={{ fontSize: '14px' }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          {...yAxisProps}
        />
        {linesProps.map((props, index) => (
          <Line key={`line-${index}`} type="linear" {...props} />
        ))}
        <Legend content={<LineChartLegend />} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
