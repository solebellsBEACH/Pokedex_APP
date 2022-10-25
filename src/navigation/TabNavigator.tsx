import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogIn, Home, PokemonScreen, PokemonBattle, BattleScreen } from '../screens';
import theme from '../global/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { LoginTab } from './components';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (<>

        <Tab.Navigator
            initialRouteName='PokemonBattle'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    positon: 'absolute',
                    height: RFValue(60),
                    backgroundColor: theme.colors.gray2,
                    bottom: RFValue(10),
                    width: '92%',
                    left: '4%',
                    elevation: 0,
                    borderRadius: RFValue(15)
                }
            }}
        >
            <Tab.Screen name="LogIn"
                options={{
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return <LoginTab focused={focused} />
                    }
                }}
                component={LogIn} />
            <Tab.Screen name="Home"
                component={Home} />

            <Tab.Screen name="PokemonBattle"
                component={PokemonBattle} />

        </Tab.Navigator>

    </>)
}