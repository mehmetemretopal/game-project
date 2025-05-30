import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-',
        title: 'Second Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2dsasfsba',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aefdsfsdd5-',
        title: 'Fourth Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-another-id-1',
        title: 'Fifth Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-another-id-2',
        title: 'Sixth Item',
    },
];


type ItemProps = {
    title: string;
    
    
};


const Item = ({ title}: ItemProps) => (
    <View style={[styles.item]}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

interface SpecificFlatListProps{
    isHorizontal?:boolean;
    numColumns?:number;
   }


const SpecificFlatList:React.FC<SpecificFlatListProps> =
 ({isHorizontal,numColumns}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                horizontal={isHorizontal}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => ( 
                    <Item
                        title={item.title}
                       
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                contentContainerStyle={styles.flatListContent} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: hp('1%'), 
    },

    flatListContent: {
        //paddingHorizontal: wp('1%'),
        alignItems:'center' 
    },

    item: {
        height:hp('23%'),
        width:wp('40%'),
        margin: 10, 
        borderWidth: wp('0.5%'),
        borderColor: '#333',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6', 
        padding: 10, 
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#253141',
    },

});

export default SpecificFlatList;