import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/MuiTheme';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  </ThemeProvider>
);

export default App;
