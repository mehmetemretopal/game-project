import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Modal, Portal, Button, PaperProvider, SegmentedButtons } from 'react-native-paper';
import { DatePickerInput, TimePickerModal } from 'react-native-paper-dates'; // DatePickerInput'u da import ettik
import GlobalText from '../../components/common/GlobalText';
import { GlobalTextInput } from '../../components/common/GlobalTextInput';

type DateRange = {
    startDate: Date | undefined;
    endDate: Date | undefined;
};

const CreateLobi = () => {
    const [lobbyName, setLobbyName] = React.useState('My Awesome Lobby');
    const [lobbyStatus, setLobbyStatus] = React.useState('');

    const [isMainModalVisible, setIsMainModalVisible] = React.useState(false);

    const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

    const [isTimePickerVisible, setIsTimePickerVisible] = React.useState(false);
    const [selectedTime, setSelectedTime] = React.useState<{ hours: number; minutes: number } | undefined>(undefined);

    const onDismissTimePicker = React.useCallback(() => {
        setIsTimePickerVisible(false);
    }, []);

    const onConfirmTimePicker = React.useCallback(
        ({ hours, minutes }: { hours: number; minutes: number }) => {
            setSelectedTime({ hours, minutes });
            setIsTimePickerVisible(false); 
            console.log('Seçilen Saat:', { hours, minutes });
        },
        [setSelectedTime]
    );

   
    const handleActivityButtonPress = () => {
        setIsMainModalVisible(true);
    };

    
    const handleDoneButtonPress = () => {
        setIsMainModalVisible(false);
        console.log("Son Seçim - Başlangıç Tarihi:", startDate, "Bitiş Tarihi:", endDate, "Saat:", selectedTime);
    };

    const modalContainerStyle = {
        backgroundColor: 'white',
        padding: 20,
        width: wp('90%'),
        alignSelf: 'center' as const,
        borderRadius: 10,
    };

    return (
        
            <View style={{ flex: 1, margin: hp('3%'), backgroundColor: '#253141', borderRadius: 10 }}>
                <GlobalText
                    title='Lobby Name'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                />
                <GlobalTextInput
                    label="Lobby Adı"
                    placeholder="Enter lobby name"
                    value={lobbyName}
                    onChangeText={setLobbyName}
                    contentStyle={{
                        backgroundColor: 'gray',
                        fontSize: 20,
                        fontFamily: 'ButtonFont',
                        color: '#fff',
                    }}
                />

                <GlobalText
                    title='Lobby Status'
                    font=''
                    size={hp('4%')}
                    color='#fff'
                    marginHorizontal={hp('2.5%')}
                    marginVertical={wp('2%')}
                />

                <View style={{ alignItems: 'center' }}>
                    <SegmentedButtons
                        value={lobbyStatus}
                        onValueChange={setLobbyStatus}
                        style={{ width: wp('80%') }}
                        buttons={[
                            {
                                value: 'activity',
                                label: 'Activity',
                                onPress: handleActivityButtonPress,
                            },
                            {
                                value: 'normal',
                                label: 'Normal',
                                onPress: () => console.log('Normal button pressed'),
                            },
                        ]}
                    />

                    <Portal>
                        <Modal
                            visible={isMainModalVisible}
                            onDismiss={handleDoneButtonPress} 
                            contentContainerStyle={modalContainerStyle}
                        >
                            <View style={{ padding: 10 }}>
                                <GlobalText
                                    title='Select Date & Time for Activity'
                                    size={hp('3%')}
                                    color='#333'
                                    font=''
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                                   
                                    <DatePickerInput
                                        locale="en"
                                        label="Start Date"
                                        value={startDate}
                                        onChange={(d) => setStartDate(d)}
                                        inputMode="start"
                                        style={{ width: wp('40%') - 10 }} 
                                        mode="outlined"
                                    />
                                  
                                    <DatePickerInput
                                        locale="en"
                                        label="End Date"
                                        value={endDate}
                                        onChange={(d) => setEndDate(d)}
                                        inputMode="end"
                                        style={{ width: wp('40%') - 10 }} 
                                        mode="outlined"
                                    />
                                </View>

                                <Button
                                    onPress={() => setIsTimePickerVisible(true)}
                                    uppercase={false}
                                    mode="outlined"
                                    style={{ marginBottom: 20 }}
                                >
                                    {selectedTime ? `Time: ${selectedTime.hours}:${selectedTime.minutes < 10 ? '0' + selectedTime.minutes : selectedTime.minutes}` : 'Pick Time'}
                                </Button>

                             
                                <TimePickerModal
                                    visible={isTimePickerVisible}
                                    onDismiss={onDismissTimePicker}
                                    onConfirm={onConfirmTimePicker}
                                    hours={selectedTime?.hours || 12}
                                    minutes={selectedTime?.minutes || 0}
                                />


                                <Button
                                    onPress={handleDoneButtonPress}
                                    mode="contained"
                                >
                                    Done
                                </Button>
                            </View>
                        </Modal>
                    </Portal>
                </View>
            </View>
       
    );
};

export default CreateLobi;
