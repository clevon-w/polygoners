import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#83b9ff',
      main: '#448aff',
      dark: '#005ecb',
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#00b0ff'
    },
  },
  typography: {
    fontFamily: 'Livvic'
  },
});

export default theme