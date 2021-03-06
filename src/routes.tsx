import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogIn, Home, PokemonScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (<>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </>)
}