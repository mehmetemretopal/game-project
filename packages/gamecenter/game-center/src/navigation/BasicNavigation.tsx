import React, {  } from 'react'
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/(tabs)/HomePage';
import ProfilePage from '../screens/(tabs)/ProfilePage';
import CreateLobi from '../screens/(tabs)/CreateLobi';
import Ionicons from '@expo/vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GameDetailPage from '../screens/(tabs)/GameDetailPage';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParam } from '../components/common/GlobalTips';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParam>();


function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="HomeList" 
        component={HomePage} 
        options={{ title: 'Ürün Listesi' }}
      />
      <Stack.Screen 
        name="Detail" 
        component={GameDetailPage} 
        options={{ title: 'Ürün Detayı',
            headerShown:true
         }}
      />
    </Stack.Navigator>
  );
}

const BasicNavigation = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <Tab.Navigator
                screenOptions={{  
                    tabBarActiveTintColor: '#4A90E2',
                    tabBarInactiveTintColor: '#B0B0B0',
                    tabBarHideOnKeyboard: true,
                    animation: 'fade',
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
                        borderRadius: 40,
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
                    component={HomeStackNavigator}
                    options={{
                        headerShown: false,
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
                       headerShown:false,
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
        </View>
    );
}

export default BasicNavigation