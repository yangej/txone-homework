import { DefaultLegendContentProps } from 'recharts';

interface Props extends Pick<DefaultLegendContentProps, 'payload'> {}

const LineChartLegend = ({ payload = [] }: Props) => {
  return (
    <div className="flex justify-center gap-x-5 mt-5">
      {payload.map((item, index) => (
        <div className="flex gap-x-2 items-center">
          <div
            className="h-2.5"
            style={{ width: '60px', backgroundColor: item.color }}
          />
          <p className="text-sm capitalize" key={`item-${index}`}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LineChartLegend;
