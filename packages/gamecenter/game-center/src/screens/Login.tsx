import React, { useState } from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import { Text, Divider } from 'react-native-paper'

import { GlobalTextInput } from '../components/common/GlobalTextInput'
import SpecificCheckBox from '../components/specific/SpecificCheckBox'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalButton } from '../components/common/GlobalButton'
import GlobalText from '../components/common/GlobalText'
//packages\gamecenter\game-center\assets\yurtlogo.png


const Login = () => {
    const [username, setUsername] = React.useState("");
    return (


        <View style={styles.container}>
            <GlobalTextInput
                label="Kullanıcı Adı"
                placeholder="ENTER YOUR EMAIL ADRESS"
                value={username}
                onChangeText={setUsername}
                contentStyle={{
                    backgroundColor: '#D6AFFE',
                    fontSize: 20,
                    fontFamily: 'ButtonFont',
                    color: '#fff',
                }}

            />
            <GlobalTextInput
                label="Şifre"
                placeholder="ENTER YOUR PASSWORD"
                value={username}
                onChangeText={setUsername}
                contentStyle={{
                    backgroundColor: '#D6AFFE',
                    fontSize: 20,
                    fontFamily: 'ButtonFont',
                    color: '#fff',
                }}
            />

            <SpecificCheckBox
                title='Remember Me' />

            <GlobalButton
                title='Login'
                onPress={() => console.log('Login pressed')}
            />
            <Divider style={{
                width: '90%', marginVertical: 20, borderStyle: 'solid',
                borderWidth: 1, borderRadius: 5, borderColor: '#fff'
            }}
            />

            <GlobalText
                title='Forget Your Password?'
                color='#fff'
                size={20}
                font=''
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#D3D9FF'
    },
})

export default Login