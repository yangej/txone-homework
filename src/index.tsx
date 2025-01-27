import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import ReactQueryProvider from './libs/react-query/ReactQueryProvider';
import { ERROR_COLOR, PRIMARY_COLOR } from './modules/app/constants/theme';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst={true}>
      <ThemeProvider theme={theme}>
        <ReactQueryProvider>
          <App />
        </ReactQueryProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
