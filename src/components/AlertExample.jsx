import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import style from '../style/style';

const AlertExample = () => {
    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text : 'Cancel',
                    onPress : () => console.log('Cancel'),
                    style : 'cancel'
                },
                {
                    text : 'Ok',
                    onPress : () => console.log('Ok'),
                    style : 'cancel'
                }
            ],
            {
                cancelable : false 
            }
        )
    }
    return (
        <View>
            <Text style={{fontSize:30}}>Alert Example</Text>
            <Button 
            title='Show Alert'
            onPress={showAlert}/>
        </View>
    );
};

export default AlertExample;