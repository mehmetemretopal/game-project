import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SpecificFlatList from '../../components/specific/SpecificFlatList';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Mehmet !</Text>
      <SpecificFlatList/>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginBottom:0,
    
  },
  text: {
    fontSize: 20,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
})

export default HomePage