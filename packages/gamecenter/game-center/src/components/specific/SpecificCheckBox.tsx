import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Checkbox, Text } from 'react-native-paper'

interface SpecificCheckBoxProps {
    title: string;
}

const SpecificCheckBox:React.FC<SpecificCheckBoxProps> = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.check}>
            {Platform.OS === 'ios' ? (
                <View style={styles.checkboxWrapper}>
                    <Checkbox.IOS
                        status={isChecked ? 'checked' : 'unchecked'}
                        onPress={handleToggleCheckbox}
                        color="blue" // İstediğiniz rengi ayarlayabilirsiniz
                    />
                    <Text style={styles.label}>{props.title}</Text>
                </View>
            ) : (
                <View style={styles.checkboxWrapper}>
                    <Checkbox.Android
                        status={isChecked ? 'checked' : 'unchecked'}
                        onPress={handleToggleCheckbox}
                        color="green" // İstediğiniz rengi ayarlayabilirsiniz
                    />
                    <Text style={styles.label}>{props.title}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    check: {
        flex:1,
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
        marginLeft: 0,
        fontSize: 16,
    },
});


export default SpecificCheckBox