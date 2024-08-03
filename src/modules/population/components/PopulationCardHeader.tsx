import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Stack, Typography } from '@mui/material';

import { hexToRGBA } from '../../common/utils';

const PopulationCardHeader = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack className="mb-7" direction="row" alignItems="center" spacing="4px">
        <LocationOnOutlinedIcon className="text-primary" />
        <Typography variant="h6" className="text-primary">
          Birth in Taiwan
        </Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: hexToRGBA('#000000', 0.6) }}>
        source: Ministry of the Interior
      </Typography>
    </Stack>
  );
};

export default PopulationCardHeader;
