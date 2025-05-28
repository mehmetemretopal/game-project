import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useFonts } from "expo-font";

interface GlobalTextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
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
                contentStyle={styles.content}
                value={props.value || text}
                onChangeText={handleTextChange}
                style={[styles.textInput, {
                    borderRadius: 20,
                    borderColor:'#B57BFE',
                    borderWidth:3,
                    overflow: 'hidden'
                }]}
                
               activeOutlineColor='#fff'
                theme={{
                    colors: {
                        onSurfaceVariant: 'gray' // Placeholder rengi
                    },
                    roundness: 10,

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        margin: 10
    },

    textInput: {
        width: '100%',
    },

    content: {
        backgroundColor: '#fff',
        fontSize: 20,
        fontFamily:'ButtonFont',
        color:'gray',
       
        
    },
});


