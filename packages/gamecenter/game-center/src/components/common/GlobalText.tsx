import React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { Text } from 'react-native-paper';
import { useFonts } from "expo-font";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface textInfo {
    title: string
    size?: number 
    color: string
    padding?: number
    margin?: number
    marginVertical?: number
    marginHorizontal?: number
    font: string
    
}
const GlobalText: React.FC<textInfo> = ({ size, title, color, padding, font, margin, marginVertical
    , marginHorizontal }) => {
    const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    });
    return (
        <View>
            <Text style={[
                { fontSize: size },
                { color: color },
                { padding: padding },
                { margin: margin },
                { marginVertical: marginVertical },
                { marginHorizontal: marginHorizontal },
                { fontFamily: font = 'ButtonFont' }
            ]
            } >

                {title}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({

})
export default GlobalText