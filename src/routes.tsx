import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogIn, Home, PokemonScreen, PokemonBattle } from './screens';
import { BattleScreen } from './screens/BattleScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (<>
        <NavigationContainer>
            <Stack.Navigator

                initialRouteName='PokemonBattle'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="LogIn"
                    component={LogIn} />
                <Stack.Screen name="Home"
                    component={Home} />
                <Stack.Screen name="PokemonScreen"
                    component={PokemonScreen} />
                <Stack.Screen name="PokemonBattle"
                    component={PokemonBattle} />
                <Stack.Screen name="BattleScreen"
                    component={BattleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </>)
}