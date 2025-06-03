import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { PaperProvider } from 'react-native-paper';
import { GlobalTextInput } from './src/components/common/GlobalTextInput';
import HomePage from './src/screens/(tabs)/HomePage';
import BasicNavigation from './src/navigation/BasicNavigation';
import { NavigationContainer } from '@react-navigation/native';
import SpecificCard from './src/components/specific/SpecificCard';
import CreateLobi from './src/screens/(tabs)/CreateLobi';



export default function App() {
  return (

    <PaperProvider>
      <BasicNavigation/>
    </PaperProvider>
  );
}

