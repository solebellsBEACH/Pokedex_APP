import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import Routes from './src/navigation/routes';
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import reactotron from './src/config/reactotron';
import { store } from './src/store';
import Toast from 'react-native-toast-message';
import { LoadingScreen } from './src/screens';

if (__DEV__) reactotron.connect()

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
    return <LoadingScreen/>
  }

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
          <Toast />
        </ThemeProvider>
      </Provider>
    </>
  );
}
