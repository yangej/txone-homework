import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  value: number;
}

const WeatherDisplayTime = ({ value }: Props) => {
  return (
    <Typography variant="body1" className="text-primary">
      Today {dayjs(value).format('HH:MM A')}
    </Typography>
  );
};

export default WeatherDisplayTime;
