import React ,{PureComponent} from 'react'
import { View,StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';

interface GlobalButtonProps {
    onPress: () => void;
    title: string;
}

export const GlobalButton:React.FC<GlobalButtonProps> = (props) => {
    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={props.onPress}
                style={styles.button}>
                {props.title}
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       width: '90%',
    } ,
    
    button:{
        margin: 5,
        padding: 5,
        backgroundColor: '#6200ee',
        color: '#ffffff',
        
       
        
    }
})
