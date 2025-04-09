import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseStateHook = () => {
    const [name, setName] = useState("Bilash");
    const [age, setAge] = useState(26);
    const updateAge = () => {
        setAge(30);
    }
    return (
        <View>
            <Text style={{fontSize: 30}}>UseStateHook</Text>
            <Text style={{fontSize : 30}}>Name : {name}</Text>
            <Button title='Press' onPress={() => setName("Polash")}/>
            <Text style={{fontSize : 30, marginTop : 20}}>Age : {age}</Text>
            <Button title='Age' onPress={updateAge}/>
        </View>
    );
};

export default UseStateHook;