import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
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
            const response = await axios.patch(`http://192.168.0.100:3000/users/${formData.id}`, {
                ...formData.name && {name : formData.name},
                ...formData.email && {email : formData.email},
            });

            Alert.alert('Success', 'Data Updated Successfully');
            setFormData({
                id : '',
                name : '',
                email : ''
            })
        } catch (error) {
            Alert.alert('Error', 'Update Failed');
        }
    }
    return (
        <View>
            <Text style={{fontSize : 30, textAlign:'center', marginBottom:10}}>PATCH_API</Text>

            <TextInput 
            value={formData.id}
            placeholder='Enter Id'
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

export default PATCH_API;