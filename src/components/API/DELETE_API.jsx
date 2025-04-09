import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const DELETE_API = () => {
    const [id, setId] = useState('');
    const handelDelete = async () => {
        try {
            const response = await axios.delete(`http://192.168.0.100:3000/users/${id}`)
            setId('')
            Alert.alert('Success', 'Data Deleted Successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to deleted');
        }
    }
    return (
        <View>
            <Text style={{fontSize : 30, textAlign:'center', marginBottom:10}}>DELETE API</Text>
            <TextInput placeholder='Enter Id'
            value={id}
            onChangeText={(value) => setId(value)}/>

            <Button title='Delete' onPress={handelDelete}/>
        </View>
    );
};

export default DELETE_API;