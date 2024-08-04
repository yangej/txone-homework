import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { Stack, Typography } from '@mui/material';

interface Props {
  value: { min: number; max: number };
}

const WeatherDisplayTemperature = ({ value }: Props) => {
  return (
    <Stack direction="row" spacing="4px">
      <DeviceThermostatOutlinedIcon className="text-primary" />
      <Typography variant="body1" className="text-primary">
        Temperature {value.min}℃ ~ {value.max}℃
      </Typography>
    </Stack>
  );
};

export default WeatherDisplayTemperature;
