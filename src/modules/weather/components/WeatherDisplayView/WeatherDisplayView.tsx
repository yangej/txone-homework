import InfoCard from '../../../common/components/InfoCard';
import { formatCelsius } from '../../utils';
import WeatherDisplayHumidity from './WeatherDisplayHumidity';
import WeatherDisplayLocation from './WeatherDisplayLocation';
import WeatherDisplayMain from './WeatherDisplayMain';
import WeatherDisplayTemperature from './WeatherDisplayTemperature';
import WeatherDisplayTime from './WeatherDisplayTime';

interface Props {
  city: string;
  main?: string;
  description?: string;
  timestamp: number;
  temperatures: {
    current: number;
    min: number;
    max: number;
  };
  humidity: number;
}

const WeatherDisplayView = ({
  city,
  main = '',
  description = '',
  timestamp,
  temperatures,
  humidity,
}: Props) => {
  return (
    <InfoCard
      header={{
        left: <WeatherDisplayLocation value={city} />,
        right: <WeatherDisplayTime value={timestamp} />,
      }}
      footer={{
        left: <WeatherDisplayHumidity value={humidity} />,
        right: (
          <WeatherDisplayTemperature
            value={{ min: temperatures.min, max: temperatures.max }}
          />
        ),
      }}
      sx={{ width: '542px', height: '400px' }}
    >
      <WeatherDisplayMain
        temperature={formatCelsius(temperatures.current)}
        main={main}
        description={description}
      />
    </InfoCard>
  );
};

export default WeatherDisplayView;
