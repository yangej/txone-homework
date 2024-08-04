import { Typography } from '@mui/material';

import InfoCard from '../../common/components/InfoCard';

const WeatherErrorView = () => {
  return (
    <InfoCard
      className="flex justify-center items-center"
      sx={{ width: '542px', height: '400px' }}
    >
      <Typography variant="body1">No Data</Typography>
    </InfoCard>
  );
};

export default WeatherErrorView;
