import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import clearIcon from '../../../assets/ic_clear-day.svg';
import cloudIcon from '../../../assets/ic_cloudy.svg';
import unknownIcon from '../../../assets/ic_not-available.svg';
import rainIcon from '../../../assets/ic_rain.svg';

type Type = 'cloud' | 'rain' | 'clear' | 'unknown';

interface WeatherImageProps {
  type: Type;
}

const getWeatherType = (description: string): Type => {
  if (description.includes('cloud')) return 'cloud';
  if (description.includes('clear')) return 'clear';
  if (description.includes('rain')) return 'rain';

  return 'unknown';
};

const WeatherImage = ({ type }: WeatherImageProps) => {
  switch (type) {
    case 'clear':
      return <img className="w-32" src={clearIcon} alt="clear weather" />;
    case 'cloud':
      return <img className="w-32" src={cloudIcon} alt="cloudy weather" />;
    case 'rain':
      return <img className="w-32" src={rainIcon} alt="rainy weather" />;
    case 'unknown':
    default:
      return <img className="w-32" src={unknownIcon} alt="unknown weather" />;
  }
};

interface Props {
  temperature: number;
  main: string;
  description: string;
}

const WeatherCardMain = ({ temperature, main, description }: Props) => {
  const type = useMemo(() => getWeatherType(description), [description]);

  return (
    <Stack direction="row" justifyContent="center" gap="12px" className="my-20">
      <WeatherImage type={type} />
      <Stack direction="column">
        <div className="text-[64px] text-primary">{temperature}℃</div>
        <Typography variant="h5" component="div" className="text-primary">
          {main}
        </Typography>
        <Typography variant="body2" component="div" className="text-primary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WeatherCardMain;
