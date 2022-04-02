
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <RequestContextProvider> */}
      <Routes />
      {/* </RequestContextProvider> */}
    </ThemeProvider>
  );
}
