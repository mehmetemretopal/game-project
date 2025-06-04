import React, { PureComponent } from 'react'
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { Button } from 'react-native-paper';
import { useFonts } from "expo-font";
import GlobalText from './GlobalText';



interface GlobalButtonProps {
    onPress: () => void;
    title: string;
    alignItems?:string;
    style?:StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>;
}


export const GlobalButton: React.FC<GlobalButtonProps> = (props) => {
    const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    });


    return (
        <View style={[
            props.containerStyle, 
        ]}>
            <Button mode='outlined' onPress={props.onPress}
                uppercase
                buttonColor='#08B9FF'
                
               style={[
                    {
                        borderColor: '#fff',
                        borderWidth: 3,
                        width: '50%',
                    },
                    props.style 
                ]}

            >
                <GlobalText
                    title={props.title}
                    color='#fff'
                    font='' 
                
                    />
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //width: '90%',
        //alignItems: 'center',
    }
    
})
