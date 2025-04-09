import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
    const [userName, setUserName] = useState('');
    return (
        <View>
            <Text style={{fontSize: 30}}>InputText</Text>
            <Text style={{fontSize : 30}}>User Name : {userName}</Text>

            <TextInput style={{fontSize : 20, borderWidth : 1, padding : 10, margin : 10, borderRadius: 10}} 
                placeholder='Enter Your user name' value={userName}
                onChangeText={(value) => setUserName(value)}/>

            <Button title='Clear' onPress={() => setUserName('')}/>
        </View>
    );
};

export default InputText;