import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({navigation}) => {
    const [userName, setUserName] = useState('');
    return (
        <View>
            <TextInput 
                placeholder='Enter user name'
                onChangeText={setUserName}
            />

            <Button title='Login' onPress={() => navigation.navigate('About', {userName})} />
        </View>
    );
};

export default Login;