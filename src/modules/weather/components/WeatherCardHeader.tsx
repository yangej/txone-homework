import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  location: string;
  timestamp: number;
}

const WeatherCardHeader = ({ location, timestamp }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing="4px" alignItems="center">
        <LocationOnOutlinedIcon className="text-primary" />
        <Typography variant="h6" className="text-primary">
          {location}
        </Typography>
      </Stack>
      <Typography variant="body1" className="text-primary">
        Today {dayjs(timestamp).format('hh:mm A')}
      </Typography>
    </Stack>
  );
};

export default WeatherCardHeader;
