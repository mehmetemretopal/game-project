import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Timespan } from "react-native/Libraries/Utilities/IPerformanceLogger";


type DateRange = {
    startDate: Date | undefined
    endDate: Date | undefined
}


export const SpecificDateTime = () => {
    const [range, setRange] = React.useState<DateRange>({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }: DateRange) => {
            setOpen(false);
            setRange({ startDate, endDate });
        },
        [setOpen, setRange]
    );

    return (

        <SafeAreaProvider>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    Pick range
                </Button>
                <DatePickerModal
                    locale="en"
                    mode="range"
                    visible={open}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </View>
        </SafeAreaProvider>

    );
}