import React, { PropsWithChildren } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ListRenderItemInfo, ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';




type ItemProps = {
    title: string;
    style:StyleProp<ViewStyle>
};


export const Item = ({ title,style }: ItemProps) => (
    <View style={style}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

interface SpecificFlatListProps {
    isHorizontal?: boolean;
    numColumns?: number;
    data:ArrayLike<any>
    renderItem:ListRenderItem<any>
}


const SpecificFlatList: React.FC<SpecificFlatListProps> =
    ({ isHorizontal, numColumns,data,renderItem}) => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    horizontal={isHorizontal}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}
                    contentContainerStyle={styles.flatListContent} 
                />
            </View>
        );
    };

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: hp('1%'),
    },

    flatListContent: {
        //paddingHorizontal: wp('1%'),
        alignItems: 'center'
    },

    item: {
        height:hp('20%'),
        width: wp('35%'),
        margin: 10,
        borderWidth: wp('0.5%'),
        borderColor: '#333',
        borderRadius:hp('5%'),
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

//({ item }) => ( <Item title={item.title} />)