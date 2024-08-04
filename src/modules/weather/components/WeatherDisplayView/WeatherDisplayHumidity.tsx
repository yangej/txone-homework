import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import { Stack, Typography } from '@mui/material';

interface Props {
  value: number;
}

const WeatherDisplayHumidity = ({ value }: Props) => {
  return (
    <Stack direction="row" spacing="4px">
      <OpacityOutlinedIcon className="text-primary" />
      <Typography variant="body1" className="text-primary">
        Humidity: {value}%
      </Typography>
    </Stack>
  );
};

export default WeatherDisplayHumidity;
