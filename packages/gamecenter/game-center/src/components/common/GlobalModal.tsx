import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal, Portal, SegmentedButtons } from 'react-native-paper'
import { useCommonHooks } from '../../hooks/useCommonHooks'

import GlobalText from './GlobalText'
import { DatePickerInput, TimePickerModal } from 'react-native-paper-dates'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GlobalModal:React.FC = () => {
    const {
    isMainModalVisible,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onDismissTimePicker,
    onConfirmTimePicker,
    handleActivityButtonPress,
    handleDoneButtonPress,
    selectedTime,
    lobbyStatus,
    setLobbyStatus,
    setIsTimePickerVisible,
    isTimePickerVisible
    // Diğer tüm döndürülen değerler...
  } = useCommonHooks();

  return (
    <View>
      <SegmentedButtons
                    value={lobbyStatus}
                    onValueChange={setLobbyStatus}
                    style={{ width: wp('80%') }}
                    buttons={[
                        {
                            value: 'normal',
                            label: 'Normal',
                            onPress: () => console.log('Normal button pressed'),
                        },
                        {
                            value: 'activity',
                            label: 'Activity',
                            onPress: handleActivityButtonPress,
                        },
                    ]}
                />

                <Portal>
                    <Modal
                        visible={isMainModalVisible}
                        onDismiss={handleDoneButtonPress}
                        contentContainerStyle={styles.modalContainerStyle}
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
  )
}

export default GlobalModal

const styles = StyleSheet.create({
     modalContainerStyle:{
            backgroundColor: 'white',
            padding: 20,
            width: wp('90%'),
            alignSelf: 'center' as const,
            borderRadius: 10,
        }
})