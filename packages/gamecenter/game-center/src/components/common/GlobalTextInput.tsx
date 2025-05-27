import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper';

interface GlobalTextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const GlobalTextInput: React.FC<GlobalTextInputProps> = (props) => {
    const [text, setText] = React.useState("");
    const [pastext, setpasText] = React.useState("");

    const handleTextChange = (text: string) => {
        setText(text);
    }

    return (
        <TextInput
            label={props.label}
            mode="outlined"
            value={props.value || text}
            onChangeText={props.onChangeText }
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        flex:1,
        justifyContent: 'center',
        margin: 10,
        width: '90%',
        backgroundColor: '#fff',
       
    },
})
