import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import logoSrc from '../../../assets/logo.svg';
import { PRIMARY_COLOR } from '../constants/theme';

const AppHeader = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className="flex flex-row justify-between">
        <img src={logoSrc} alt="analysis.dev logo" />
        <Box display="flex" gap="16px">
          <AccountCircleIcon sx={{ color: PRIMARY_COLOR }} />
          <Typography variant="body1" component="span">
            username
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
