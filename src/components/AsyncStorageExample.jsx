import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { getData, removeData, saveData } from './userInformation';


const AsyncStorageExample = () => {
    const [userName, setUserName] = useState('');

    const saveUserName = async () => {
        await saveData('username', userName);
        setUserName('');
    }
    const getUserName = async () => {
        const storedUserName = await getData('username');
        setUserName(storedUserName);
    }
    const deleteUserName = async () => {
        await removeData('username');
        setUserName('')
    }
    return (
        <View>
            <Text style={{fontSize : 30, textAlign:'center', fontWeight:'bold'}}>AsyncStorageExample</Text>

            <TextInput 
            placeholder='Enter username'
            value={userName}
            onChangeText={setUserName}
            />

            <Button title='Save User Name' onPress={saveUserName}/>
            <Button title='GET User Name' onPress={getUserName}/>
            <Button title='Remove User Name' onPress={deleteUserName}/>

            {
                userName ? <Text>User Name : {userName}</Text> : null
            }
        </View>
    );
};

export default AsyncStorageExample;