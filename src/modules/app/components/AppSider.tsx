import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  styled,
} from '@mui/material';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { hexToRGBA } from '../../common/utils';
import { PRIMARY_COLOR } from '../constants/theme';
import type { RoutePath } from '../types';

type AppSiderItem<Key extends string, To extends string> = {
  key: Key;
  text: string;
  to: To;
  icon?: ReactNode;
};

const items: AppSiderItem<RoutePath, RoutePath>[] = [
  {
    key: '/weather',
    to: '/weather',
    text: "Today's Weather",
    icon: <WbSunnyOutlinedIcon />,
  },
  {
    key: '/population',
    to: '/population',
    text: 'Population',
    icon: <BarChartOutlinedIcon />,
  },
];

const StyledListItemButton = styled(ListItemButton)({
  '&.MuiListItemButton-root': {
    color: hexToRGBA('#000000', 0.4),
    padding: '16px 32px',
  },
  '&.Mui-selected': {
    color: hexToRGBA('#000000', 0.87),
    borderRight: `3px solid ${PRIMARY_COLOR}`,
    backgroundColor: hexToRGBA(PRIMARY_COLOR, 0.1),
  },
});

const AppSider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Drawer
      variant="permanent"
      className="w-[240px]"
      PaperProps={{
        className: 'w-[240px] box-border py-42px',
      }}
    >
      <Toolbar />
      <List disablePadding={true}>
        {items.map(({ key, icon, text, to }) => (
          <ListItem key={key} disablePadding>
            <StyledListItemButton
              selected={currentPath === key}
              onClick={() => {
                navigate(to);
              }}
            >
              <Box display="flex" alignItems="center" gap="12px">
                {icon ? icon : null}
                <ListItemText primary={text} />
              </Box>
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSider;
