import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
    const [formData, setFormData] = useState({
        id : '',
        name : '',
        email : ''
    });

    const handelInput = (field, value) => {
        setFormData({...formData, [field] : value});
    }

    const handelUpdate = async () => {
        try {
            const response = await axios.put(`http://192.168.0.100:3000/users/${formData.id}`, {
                name : formData.name,
                email : formData.email
            });
            Alert.alert('Success', 'Data Updated Successfully');
            setFormData({
                id : '',
                name : '',
                email : ''
            });
        } catch (error) {
            Alert.alert('Error', 'Failed to Update');
        }
    }

    return (
        <View>
            <Text style={{textAlign : 'center', fontSize : 30, marginBottom : 10}}>PUT_API</Text>

            <TextInput 
            value={formData.id}
            placeholder='Enter id'
            onChangeText={(value) => handelInput('id', value)}
            />
            <TextInput 
            value={formData.name}
            placeholder='Enter Name'
            onChangeText={(value) => handelInput('name', value)}
            />
            <TextInput 
            value={formData.email}
            placeholder='Enter Email'
            onChangeText={(value) => handelInput('email', value)}
            />
            <Button title='Update' onPress={handelUpdate}/>
        </View>
    );
};

export default PUT_API;