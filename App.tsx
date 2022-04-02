
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import Routes from './src/routes';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-SemiBold': require('./assets/fonts/Spartan-SemiBold.ttf'),
    'Spartan-ExtraBold': require('./assets/fonts/Spartan-ExtraBold.ttf'),
    'Spartan-ExtraLight': require('./assets/fonts/Spartan-ExtraLight.ttf'),
    'Spartan-Light': require('./assets/fonts/Spartan-Light.ttf'),
    'Spartan-Medium': require('./assets/fonts/Spartan-Medium.ttf'),
    'Spartan-Black': require('./assets/fonts/Spartan-Black.ttf'),
    'Spartan-Thin': require('./assets/fonts/Spartan-Thin.ttf')
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <RequestContextProvider> */}
      <Routes />
      {/* </RequestContextProvider> */}
    </ThemeProvider>
  );
}
