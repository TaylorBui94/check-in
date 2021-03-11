
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from '@expo/vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import eventData from '../json/events.json';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const CreateEvent = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState('');

    const createTime = (time) => {
        const hour =
            time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        const minute =
            time.getMinutes() < 10
                ? '0' + time.getMinutes()
                : time.getMinutes();
        const ampm = time.getHours() > 11 ? 'pm' : 'am';
        return hour + ':' + minute + ' ' + ampm;
    };

    const createDate = (date) => {
        return (
            months[date.getMonth().toString()] +
            ' ' +
            date.getDate() +
            ', ' +
            date.getFullYear()
        );
    };

    /* SHOWING DATE PICKER */
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.warn(`A date has been picked: ${createDate(date)} `);
        console.log(date);
        setDateSelected(createDate(date));
        hideDatePicker();
    };

    useEffect(() => {
        setDateSelected(dateSelected);
    }, [dateSelected]);

    /* SHOWING TIME PICKER */
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        console.warn('A time has been picked: ', createTime(time));
        console.log(time);
        setTimeSelected(createTime(time));
        hideTimePicker();
    };

    useEffect(() => {
        setTimeSelected(timeSelected);
    }, [timeSelected]);

    const image = require('../images/image.png');

    return (
        <View style={styles.contentContainer}>
            
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'Bold',
                    alignSelf: 'center',
                    marginTop: 60,
                    marginBottom: 50,
                }}>
                Create Event{' '}
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    label='Event Title:'
                    placeholder='Name of Event'
                    leftIcon={
                        <Icon
                            name='mail'
                            size={24}
                            color='black'
                            style={styles.icon}
                        />
                    }
                />

                <Input
                    label='Location:'
                    placeholder='Event Location'
                    leftIcon={
                        <Icon
                            name='enviromento'
                            size={24}
                            color='black'
                            style={styles.icon}
                        />
                    }
                />

                <Input
                    label='Primary Contact:'
                    placeholder="Contact's name"
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                            style={styles.icon}
                        />
                    }
                />

            {console.warn(eventData["events"][0]["Event Name"])}

            <View>{eventData["events"].map((data, key) => {
                <>
                {console.warn(data["Event Name"])}
                <Text >{data["Event Name"]}</Text>
                <Text>{data["Date"]}</Text>
                <Text>{data["Time"]}</Text>
                <Text>{data["Location"]}</Text>

                </>
            })}
            </View>

                <TouchableOpacity onPress={() => [showDatePicker()]}>
                    <Input
                        label='Date:'
                        placeholder='Event Date'
                        editable={false}
                        value={dateSelected}
                        leftIcon={
                            <Icon
                                name='calendar'
                                size={24}
                                color='black'
                                style={styles.icon}
                            />
                        }
                    />
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='date'
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />

                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode='time'
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                    headerTextIOS='Pick a time'
                />

                <TouchableOpacity onPress={() => [showTimePicker()]}>
                    <Input
                        label='Time:'
                        placeholder='Event Start Time'
                        editable={false}
                        value={timeSelected}
                        leftIcon={
                            <Icon
                                name='clockcircleo'
                                size={24}
                                color='black'
                                style={styles.icon}
                            />
                        }
                    />
                </TouchableOpacity>

                <Input
                    label='Description:'
                    placeholder='Event Description'
                    leftIcon={
                        <Icon
                            name='info'
                            size={24}
                            color='black'
                            style={styles.icon}
                        />
                    }
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.smallButton} title='Create Event' />
            </View>
        </View>
    );
};
/*
const validate_Field=(email, password, verifypass)=>{
    if(email==""){
        alert("Please enter an email address")
        return false
    }
    else if (password!=verifypass){
        alert("The password you entered does not match")
        return false
    }
    else if (password==""){
        alert("Please enter a password")
        return false
    }
    else if (verifypass==""){
        alert("Please re-enter password")
        return false
    }
    return true
}
*/

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#fff7d5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 50,
    },
    smallImage: {
        marginTop: 60,
        width: 200,
        height: 200,
    },
    inputContainer: {
        width: '90%',
        marginTop: 50,
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        justifyContent: 'space-around',
        height: '40%',
    },
    smallButton: {},
    icon: {
        marginRight: 15,
    },
});

export default CreateEvent;
// https://www.npmjs.com/package/react-native-modal-datetime-picker


