import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Divider } from 'react-native-paper'
import { GlobalButton } from '../components/common/GlobalButton'
import { GlobalTextInput } from '../components/common/GlobalTextInput'
import SpecificCheckBox from '../components/specific/SpecificCheckBox'
//packages\gamecenter\game-center\assets\yurtlogo.png


const Login = () => {
    return (
        <View style={styles.container}>
           
            <GlobalTextInput
                label="Username"
                value=""
                onChangeText={(text) => console.log(text)}

            />
            <GlobalTextInput
                label="Password"
                value=""
                onChangeText={(pastext) => console.log(pastext)}

            />

            <SpecificCheckBox
                title='Remember Me' />

            <GlobalButton
                title='Login'
                onPress={() => console.log('Login pressed')}
            />
            <Divider style={{ width: '90%', marginVertical: 10 }}
                bold />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5

    },
    


})

export default Login