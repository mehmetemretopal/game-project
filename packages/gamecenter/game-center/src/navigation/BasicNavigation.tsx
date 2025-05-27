import React from 'react'

import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/(tabs)/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../screens/(tabs)/ProfilePage';


export type RootStackParamList = {
    HomePage: undefined;
    ProfilePage: { userId: string };
    //Create: undefined; ilerde lobi oluşturulabilir
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const BasicNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                    }}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="ProfilePage"
                    component={ProfilePage}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Profile',
                    }}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BasicNavigation