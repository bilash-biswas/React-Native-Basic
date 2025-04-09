import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
    const [formData, setFormData] = useState({
        id : '',
        name : '',
        email : ''
    });

    const handelInput = (field, value) => {
        setFormData(
            {
                ...formData, [field] : value
            }
        )
    };

    const handelSubmit = async () => {
        try {
            const response = await axios.post('http://192.168.0.100:3000/users', formData);
            Alert.alert('Success', 'Data Submitted Successfully');
            setFormData({
                id : '',
                name : '',
                email : ''
            })
        } catch (error) {
            
        }
    }

    return (
        <View>
            <Text style={styles.title}>POST API</Text>

            <TextInput 
                placeholder='Enter Id'
                value={formData.id}
                onChangeText={(value) => handelInput('id', value)}
            />
            <TextInput 
                placeholder='Enter Name'
                value={formData.name}
                onChangeText={(value) => handelInput('name', value)}
            />
            <TextInput 
                placeholder='Enter Email'
                value={formData.email}
                onChangeText={(value) => handelInput('email', value)}
            />

            <Button title='submit' onPress={handelSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title : {
        textAlign : 'center',
        fontSize : 30,
        marginBottom : 10
    }
});

export default POST_API;