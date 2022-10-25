import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogIn, Home, PokemonScreen, PokemonBattle, BattleScreen } from '../screens';
import theme from '../global/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (<>
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='PokemonBattle'
                screenOptions={{
                    headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                        positon: 'absolute',
                        height: RFValue(60),
                        backgroundColor: theme.colors.gray2,
                        bottom: RFValue(10),
                        width: '92%',
                        left: '4%',
                        elevation:0,
                        borderRadius:RFValue(15)
                    }
                }}
            >
                <Tab.Screen name="LogIn"
                    component={LogIn} />
                <Tab.Screen name="Home"
                    component={Home} />
                <Tab.Screen name="PokemonScreen"
                    component={PokemonScreen} />
                <Tab.Screen name="PokemonBattle"
                    component={PokemonBattle} />
                <Tab.Screen name="BattleScreen"
                    component={BattleScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    </>)
}