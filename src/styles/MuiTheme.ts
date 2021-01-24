import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5bdb97',
      main: '#32d37d',
      dark: '#239357',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#aaebc8',
      main: '#95e7bb',
      dark: '#68a182',
      contrastText: '#FFF',
    },
  },
});

export default theme;
