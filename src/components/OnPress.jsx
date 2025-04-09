import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const OnPress = () => {
    const getName = (name) => {
        Alert.alert('Name : ', name);
    }
    return (
        <View>
            <Text style={{fontSize : 30}}>OnPress</Text>
            <Button title='Press' onPress={() => getName("Bilash")}/>
        </View>
    );
};

export default OnPress;