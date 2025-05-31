import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { useFonts } from "expo-font";
import GlobalText from './GlobalText';



interface GlobalButtonProps {
    onPress: () => void;
    title: string;
}


export const GlobalButton: React.FC<GlobalButtonProps> = (props) => {
    const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    });


    return (
        <View style={styles.container}>
            <Button mode='outlined' onPress={props.onPress}
                uppercase
                buttonColor='#08B9FF'
                
                style={
                    {
                        borderColor: '#fff',
                        borderWidth: 3,
                        width: '50%',
                       
                    }
                }

            >
                <GlobalText
                    title='LOGIN'
                    size={30}
                    color='#fff'
                    font='' />
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
    }
    
})
