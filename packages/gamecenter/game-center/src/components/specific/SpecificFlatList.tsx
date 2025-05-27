import React from 'react'
import { FlatList, StyleSheet, View,Text } from 'react-native'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7',
        title: 'Third Item',
    },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


const SpecificFlatList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
       width:80,
        height: 80,
        marginRight:5,
        borderWidth:3,
        borderColor: '#6200ee',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
    },
});
export default SpecificFlatList