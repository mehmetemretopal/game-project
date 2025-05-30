import React, { Children, PropsWithChildren } from 'react'

import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/(tabs)/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../screens/(tabs)/ProfilePage';


type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    //Create: undefined; ilerde lobi oluşturulabilir
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const BasicNavigation = ({children}:PropsWithChildren) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                    }}
                />
               
                <Tab.Screen
                    name="Profile"
                    component={ProfilePage}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                    }}
                />
                
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default BasicNavigation