import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

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
    width: number;
    height: number;
};


const Item = ({ title, width, height }: ItemProps) => (
    <View style={[styles.item, { width: width, height: height }]}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


interface SpecificFlatListProps {
    itemWidth?: number; 
    itemHeight?: number; 
}

const SpecificFlatList: React.FC<SpecificFlatListProps> = ({ itemWidth, itemHeight }) => {
   
    const defaultItemWidth = itemWidth || Dimensions.get('window').width * 0.4;
    const defaultItemHeight = itemHeight || Dimensions.get('window').width * 0.5;

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                   
                    <Item
                        title={item.title}
                        width={defaultItemWidth}
                        height={defaultItemHeight}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContent} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10, 
    },

    flatListContent: {
        flex:1,
        paddingHorizontal: 10,
       
    },

    item: {
        marginRight: 10, 
        borderWidth: 2,
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