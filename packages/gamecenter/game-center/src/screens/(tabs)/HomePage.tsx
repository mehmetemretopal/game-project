import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { Surface } from 'react-native-paper';
import SpecificFlatList, { Item, styles } from '../../components/specific/SpecificFlatList';
import GlobalText from '../../components/common/GlobalText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DATA } from '../../services/Data';
import { DATA2 } from '../../services/Data2';
import SpecificCard from '../../components/specific/SpecificCard';

const HomePage = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <View style={{ flex: 2, backgroundColor: 'red' }}>
        <View style={{ flex: 3, backgroundColor: 'orange', margin: hp('2%') }}>
          <View style={{ flex: 2, backgroundColor: 'pink' }}>
            <GlobalText
              title='Hello'
              size={hp('2%')}
              color='#253141'
              font=''
            />
            <GlobalText
              title='Mehmet Emre'
              size={hp('2%')}
              color='#253141'
              font=''
            />
          </View>
          <View style={{ flex: 3, backgroundColor: 'purple', justifyContent: 'center' }}>
            <GlobalText
              title='Games'
              font=''
              size={hp('6%')}
              color='#253141'
            />
          </View>
        </View>
        <View style={{ flex: 7, backgroundColor: 'cyan' }}>
          <SpecificFlatList
            isHorizontal={true}
            data={DATA}
            renderItem={({ item }) => (<Item
              style={styles.item}
              title={item.title} />)}

          />
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: 'yellow', borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
        <View style={{ flex: 2, backgroundColor: 'red', margin: hp('2%') }}>
          <GlobalText
            title='Lobies'
            color='#253141'
            font=''
            size={hp('6%')}
          />
        </View>
        <View style={{ flex: 12, backgroundColor: 'green' }}>
          
        <FlatList
        data={DATA2}
        renderItem={({ item }) => 
        <SpecificCard {...item} imageUrl={{ uri: item.imageUrl }} />}
        keyExtractor={item => item.id}
        numColumns={2} // To display two cards per row
        contentContainerStyle={styless.listContainer} // Style for the content
      />
         
        </View>
      </View>
    </View>
  );

};


const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // Add some top margin
  },
  listContainer: {
    paddingHorizontal: wp('2.5%'), // Add horizontal padding for the whole list
  },
});

export default HomePage;






/*
<View style={styles.container}>
     
      <View style={styles.topSection}>
       
        <View style={{ flexDirection: 'row', paddingTop: 20,borderColor:'black',borderStyle:'dotted',borderWidth:1 }}>
          <GlobalText
            title='Hello👋  '
            size={20}
            color='#253141'
            font=''
          />
          <GlobalText
            title='Mehmet Emre'
            size={20}
            color='#253141'
            font=''
          />
        </View>

        <GlobalText
          title='Games'
          font=''
          size={40}
          color='#253141'
        />

        <View style={{ flex: 1 ,borderColor:'black',borderStyle:'dotted',borderWidth:2}}>
          <SpecificFlatList
            
          />
        </View>
      </View>

    
      <View style={styles.bottomSection}>
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


style
    container: {
    flex: 1,
    backgroundColor: '#E6EDFF', 
  },
  topSection: {
    flex: 1, 
    paddingHorizontal: 10,
    paddingBottom: 10, 
  },
  bottomSection: {
    flex: 1, 
   },
  surface: {
    flex: 1,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    backgroundColor: '#fff', 
    paddingHorizontal: 16, 
    paddingVertical: 27, 
    justifyContent: 'flex-start',
  },
    */
