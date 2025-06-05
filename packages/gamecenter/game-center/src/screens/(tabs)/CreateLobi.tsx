import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Modal, Portal } from 'react-native-paper';
import GlobalText from '../../components/common/GlobalText';
import { GlobalTextInput } from '../../components/common/GlobalTextInput';
import { DATA } from '../../services/Data';
import { SelectCountry } from 'react-native-element-dropdown';
import { GlobalButton } from '../../components/common/GlobalButton';
import GlobalModal from '../../components/common/GlobalModal';
import { useCommonHooks } from '../../hooks/useCommonHooks'

const CreateLobi: React.FC = () => {
    const {
        lobbyName,
        setLobbyName,
        showModal,
        hideModal,
        visible,
        country,
        setCountry
    } = useCommonHooks();
    return (
        <View style={{ flex: 4, margin: hp('3%'), backgroundColor: '#253141', borderRadius: 10 }}>
            {/*1. kısım*/}
            <View style={{ flex: 1 }}>

                <GlobalText
                    title='Lobby Name'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                />
                <GlobalTextInput
                    placeholder="Enter lobby name"
                    value={lobbyName}
                    onChangeText={setLobbyName}
                    contentStyle={{
                        backgroundColor: 'gray',
                        fontSize: hp('2%'),
                        fontFamily: 'ButtonFont',
                        color: '#fff',
                    }}
                />
            </View>
            {/*2. kısım*/}
            <View style={{ flex: 1 }}>

                <GlobalText
                    title='Lobby Status'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                    marginVertical={wp('2%')}
                />

                <View style={{ alignItems: 'center' }}>
                    <GlobalModal />
                </View>
            </View>

            {/*3. kısım*/}

            <View style={{ flex: 1 }}>
                <GlobalText
                    title='Lobby Password'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                />
                <GlobalTextInput
                    value={lobbyName}
                    onChangeText={setLobbyName}
                    contentStyle={{
                        backgroundColor: 'gray',
                        fontSize: 20,
                        fontFamily: 'ButtonFont',
                        color: '#fff',
                    }}
                />
            </View>


            {/*4. kısım*/}
            <View style={{ flex: 1 }}>
                <GlobalText
                    title='Select Game'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                />
                <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    maxHeight={200}
                    value={country}
                    data={DATA}
                    valueField="id"
                    labelField="title"
                    imageField="image"
                    placeholder="Select game"
                    onChange={e => {
                        setCountry(e.value);
                    }}
                />
            </View>

            {/*5. kısım*/}
            <View style={{ flex: 2 }}>

                <View style={{
                    marginTop: 'auto', marginBottom: 25, 
                }}>
                    <GlobalButton
                        style={{ alignSelf: 'center', width: 250 }}
                        title='Save'
                        onPress={showModal}
                    />
                </View>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                        <View style={{ flexDirection: 'column' }}>
                            <GlobalText
                                title={lobbyName}
                                font=''
                                size={hp('2%')}
                                color='black'
                                marginHorizontal={hp('2.5%')}
                            />
                            <GlobalTextInput
                                value={lobbyName}
                                onChangeText={setLobbyName}
                                contentStyle={{
                                    backgroundColor: 'gray',
                                    fontSize: 20,
                                    fontFamily: 'ButtonFont',
                                    color: '#fff',
                                }}
                            />
                            <GlobalButton
                                title='Copy'
                                onPress={() => { console.log("copied"); }}
                            />
                        </View>
                    </Modal>
                </Portal>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        width: 150,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    containerStyle:
    {
        backgroundColor: 'white',
        padding: 20
    }
});

export default CreateLobi;
