import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Checkbox, Text } from 'react-native-paper'
import { useFonts } from "expo-font";
import { GlobalTextInput } from '../common/GlobalTextInput';
import GlobalText from '../common/GlobalText';

interface SpecificCheckBoxProps {
    title: string;
}

const SpecificCheckBox:React.FC<SpecificCheckBoxProps> = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

const [fontsLoaded] = useFonts({
        ButtonFont: require('../../../assets/fonts/LilitaOne-Regular.ttf')
    })
    return (
        <View style={styles.check}>
            {Platform.OS === 'ios' ? (
                <View style={styles.checkboxWrapper}>
                    <Checkbox.IOS
                        status={isChecked ? 'checked' : 'unchecked'}
                        onPress={handleToggleCheckbox}
                        color="#fff" 
                    />
                      <GlobalText 
                    title={props.title}
                    size={25}
                    color='#fff'
                    
                    />
                </View>
            ) : (
                <View style={styles.checkboxWrapper}>
                    <Checkbox.Android
                        status={isChecked ? 'checked' : 'unchecked'}
                        onPress={handleToggleCheckbox}
                        color="white" 
                        borderless
                    />
                    <GlobalText 
                    title={props.title}
                    size={25}
                    color='#fff'
                    
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    check: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        

    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    label: {
        color:'#fff',
        marginLeft: 0,
        fontSize: 20,
        
    },
});


export default SpecificCheckBox