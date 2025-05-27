import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { PaperProvider } from 'react-native-paper';
import { GlobalTextInput } from './src/components/common/GlobalTextInput';
import HomePage from './src/screens/(tabs)/HomePage';
import BasicNavigation from './src/navigation/BasicNavigation';


export default function App() {
  return (
    <PaperProvider>     
      <Login/>
    </PaperProvider>
  );
}

