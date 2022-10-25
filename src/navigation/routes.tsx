import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BattleScreen, PokemonScreen } from '../screens';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,}}
            >
                <Stack.Screen name="HomePage" component={TabNavigator} />
                <Stack.Screen name="PokemonScreen"
                    component={PokemonScreen} />
                <Stack.Screen name="BattleScreen"
                    component={BattleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}