import React, { Children, PropsWithChildren } from 'react'

import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/(tabs)/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../screens/(tabs)/ProfilePage';
import CreateLobi from '../screens/(tabs)/CreateLobi';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';



type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    CreateLobi: undefined;
    //Create: undefined; ilerde lobi oluşturulabilir
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const BasicNavigation = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false, 
                        tabBarActiveTintColor: '#4A90E2',
                        tabBarInactiveTintColor: '#B0B0B0', 
                        tabBarHideOnKeyboard: true,
                        animation:'fade',
                        tabBarStyle: {
                            backgroundColor: '#fff', 
                            borderTopWidth: 0, 
                            elevation: 15, 
                            shadowColor: '#000', 
                            shadowOffset: { width: 0, height: -5 }, 
                            shadowOpacity: 0.08, 
                            shadowRadius: 10,
                            height: hp('10%'), 
                            paddingBottom: 10, 
                            paddingTop: 10, 
                            borderRadius:40,
                        
                            bottom: 0, // En alta hizala
                            left: 0,
                            right: 0,
                        },
                        tabBarLabelStyle: {
                            fontSize: 12, // Etiket yazı boyutu ayarlandı
                            fontWeight: 'bold', // Yazı kalınlığı 'bold' yapıldı
                            letterSpacing: 0.5, // Harf aralığı eklendi
                            textTransform: 'uppercase', // Tüm harfler büyük yapıldı
                            marginTop: 2, // İkon ile etiket arasına boşluk
                        },
                        tabBarIconStyle: {
                            marginTop: 0, // İkonun üstten boşluğu sıfırlandı
                        },
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomePage}
                        options={{
                            tabBarLabel: 'Ana Sayfa', // Sekme etiketi
                            tabBarIcon: ({ color, size, focused }) => (
                                <Ionicons
                                    name={focused ? 'home' : 'home-outline'} // Odaklandığında dolgulu, değilse çizgili ikon
                                    size={size + 4} // İkon boyutu biraz artırıldı
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="CreateLobi"
                        component={CreateLobi}
                        options={{
                            tabBarLabel: 'Lobi Oluştur', // Sekme etiketi
                            tabBarIcon: ({ color, size, focused }) => (
                                <Ionicons
                                    name={focused ? 'add-circle' : 'add-circle-outline'} // Odaklandığında dolgulu, değilse çizgili ikon
                                    size={size + 4} // İkon boyutu biraz artırıldı
                                    color={color}
                                />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Profile"
                        component={ProfilePage}
                        options={{
                            tabBarLabel: 'Profil', // Sekme etiketi
                            tabBarIcon: ({ color, size, focused }) => (
                                <Ionicons
                                    name={focused ? 'person' : 'person-outline'} // Odaklandığında dolgulu, değilse çizgili ikon
                                    size={size + 4} // İkon boyutu biraz artırıldı
                                    color={color}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default BasicNavigation