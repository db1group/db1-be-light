import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import GlobalStyle from './styles/global';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006D99',
    },
    secondary: {
      main: '#00335E',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
