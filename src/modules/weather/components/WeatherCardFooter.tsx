import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import { Stack, Typography } from '@mui/material';

interface Props {
  humidity: number;
  temperatures: {
    min: number;
    max: number;
  };
}

const WeatherCardFooter = ({ humidity, temperatures }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing="4px">
        <OpacityOutlinedIcon className="text-primary" />
        <Typography variant="body1" className="text-primary">
          Humidity: {humidity}%
        </Typography>
      </Stack>
      <Stack direction="row" spacing="4px">
        <DeviceThermostatOutlinedIcon className="text-primary" />
        <Typography variant="body1" className="text-primary">
          Temperature {temperatures.min}℃ ~ {temperatures.max}℃
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WeatherCardFooter;
