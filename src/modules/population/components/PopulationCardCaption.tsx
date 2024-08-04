import { Typography } from '@mui/material';

import { hexToRGBA } from '../../common/utils';

const PopulationCardCaption = () => {
  return (
    <Typography variant="body2" sx={{ color: hexToRGBA('#000000', 0.6) }}>
      source: Ministry of the Interior
    </Typography>
  );
};

export default PopulationCardCaption;
