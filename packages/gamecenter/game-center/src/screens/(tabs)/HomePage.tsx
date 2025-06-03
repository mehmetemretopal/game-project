import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { Surface, } from 'react-native-paper';
import SpecificFlatList, { Item, styles } from '../../components/specific/SpecificFlatList';
import GlobalText from '../../components/common/GlobalText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DATA } from '../../services/Data';
import { DATA2 } from '../../services/Data2';
import SpecificCard from '../../components/specific/SpecificCard';

const HomePage = () => {

  return (
    <View style={{ flex: 1,backgroundColor:'#E6EDFF'}}>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 3, margin: hp('2%')}}>
          <View style={{ flex: 2 ,flexDirection:'row'}}>
            <GlobalText
              title='Hello  '
              size={hp('4%')}
              color='#253141'
              font=''
            />
            <GlobalText
              title='Mehmet Emre'
              size={hp('4%')}
              color='#253141'
              font=''
            />
          </View>
          <View style={{ flex: 3, justifyContent: 'center',paddingTop:hp('0.25%') }}>
            <GlobalText
              title='Games'
              font=''
              size={hp('6%')}
              color='#253141'
            />
          </View>
        </View>
        <View style={{ flex: 7}}>
          <SpecificFlatList
            isHorizontal={true}
            data={DATA}
            renderItem={({ item }) => (<Item
              style={styles.item}
              title={item.title} />)}

          />
        </View>
      </View>
      <View style={{ flex: 3, borderTopRightRadius: 40,
         borderTopLeftRadius: 40 ,backgroundColor:'#fff',borderBottomColor:'black',borderWidth:2,borderStyle:'solid'}}>
        <View style={{ flex: 2, margin: hp('2%') }}>
          <GlobalText
            title='Lobies'
            color='#253141'
            font=''
            size={hp('6%')}
          />
        </View>
        <View style={{ flex: 12}}>
        <FlatList
        data={DATA2}
        renderItem={({ item }) => 
        <SpecificCard {...item} imageUrl={{ uri: item.imageUrl }} />}
        keyExtractor={item => item.id}
        numColumns={2} 
      />
        </View>
      </View>
    </View>
  );

};


const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  
});

export default HomePage;