import React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { Text } from 'react-native-paper';
import { useFonts } from "expo-font";

interface textInfo {
    title: string
    size:number
    color:string
}
const GlobalText: React.FC<textInfo> = ({size,title,color}) => {
    const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    });
    return (
        <View>
            <Text style={[
                {fontSize:size},
                style.tstyle,
                {color:color}
                
            ]} >
               
                {title}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
  tstyle:{
    fontFamily:'ButtonFont'
    
  } 
})
export default GlobalText