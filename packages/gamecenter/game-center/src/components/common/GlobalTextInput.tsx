import React from 'react'
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useFonts } from "expo-font";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



interface GlobalTextInputProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    activeOutlineColor?:string;
    contentStyle?:StyleProp<TextStyle>
}

export const GlobalTextInput: React.FC<GlobalTextInputProps> = (props) => {
    const [text, setText] = React.useState("");

    const handleTextChange = (text: string) => {
        setText(text);
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    }
    const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    })
    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                contentStyle={props.contentStyle}
                value={props.value || text}
                onChangeText={handleTextChange}
                style={[styles.textInput, {
                    borderRadius: 20,
                    borderColor:'#fff',
                    borderWidth:wp('1%'),
                    overflow: 'hidden'
                }]}
                
               activeOutlineColor={props.activeOutlineColor}
                theme={{
                    colors: {
                        onSurfaceVariant: '#fff' // Placeholder rengi
                    },
                    roundness: 10,

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('80%'),
        alignSelf: 'center',
        margin: 10
    },

    textInput: {
        width: wp('80%'),
        height: hp('6%')
    },

    content: {
        backgroundColor: '#D6AFFE',
        fontSize: 20,
        fontFamily:'ButtonFont',
        color:'#fff',
       
        
    },
});


