import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Stack, Typography } from '@mui/material';

const PopulationCardTitle = () => {
  return (
    <Stack className="mb-7" direction="row" alignItems="center" spacing="4px">
      <LocationOnOutlinedIcon className="text-primary" />
      <Typography variant="h6" className="text-primary">
        Birth in Taiwan
      </Typography>
    </Stack>
  );
};

export default PopulationCardTitle;
