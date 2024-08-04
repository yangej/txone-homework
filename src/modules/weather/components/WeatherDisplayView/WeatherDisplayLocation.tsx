import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Stack, Typography } from '@mui/material';

interface Props {
  value: string;
}

const WeatherDisplayLocation = ({ value }: Props) => {
  return (
    <Stack direction="row" spacing="4px" alignItems="center">
      <LocationOnOutlinedIcon className="text-primary" />
      <Typography variant="h6" className="text-primary">
        {value}
      </Typography>
    </Stack>
  );
};

export default WeatherDisplayLocation;
