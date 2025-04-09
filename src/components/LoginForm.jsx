import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handelLogin = () => {
        Alert.alert("Login Details", `Email: ${email}, Password: ${password}`);
        setEmail('');
        setPassword('');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                placeholderTextColor='#999'
            />

            <TextInput 
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                placeholderTextColor='#999'
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handelLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        paddingHorizontal : 20,
        paddingTop : 40,
        backgroundColor : '#f0f0f0',
    },
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 30,
        textAlign : 'center',
        color : '#333'
    },
    input : {
        height : 50,
        borderColor : '#ccc',
        borderWidth : 1,
        marginBottom : 20,
        borderRadius : 10,
        paddingHorizontal : 15,
        backgroundColor : '#fff',
        fontSize : 16,
        color : '#333'
    },
    button : {
        backgroundColor : '#6200EE',
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center'
    },
    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold'
    }
});

export default LoginForm;