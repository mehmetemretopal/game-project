import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Button, Card, Surface, Text } from 'react-native-paper'
import SpecificFlatList from '../../components/specific/SpecificFlatList';
import GlobalText from '../../components/common/GlobalText';
import BasicNavigation from '../../navigation/BasicNavigation';


const DATA = [
  {
    id: 'bd7acbea-c1bfsaf1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1fdsb1-46c2-aed5-',
    title: 'Second Item',
  },
  {
    id: 'bd7acbea-fs-46c2-aed5-3ad53abb2dsasfsba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-fds-46c2-aefdsfsdd5-',
    title: 'Second Item',
  },

];



const HomePage = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={{ padding: 10, flex: 1 }}>
        <GlobalText
          title='Hello 👋'
          size={15}
          color='#253141'
          font=''
          marginVertical={3}
        />

        <GlobalText
          title='Mehmet Emre'
          size={20}
          color='#253141'
          font=''
        />

        <GlobalText
          title='Games'
          font=''
          size={40}
          color='#253141'
        />
        <SpecificFlatList
          itemWidth={150}
          itemHeight={150} />
      </View>

      <View style={{ flex: 1 }}>
        <Surface style={styles.surface} elevation={4}>
          <GlobalText
            title='Lobies'
            font=''
            size={40}
            color='#253141'

          />

        </Surface>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E6EDFF',
  },
  surface: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 27
  },
})

export default HomePage