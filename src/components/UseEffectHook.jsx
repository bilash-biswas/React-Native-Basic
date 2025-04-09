import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('This is UseEffect Hook');
    }, []);
    return (
        <View>
            <Text  style={{fontSize : 30}}>UseEffectHook</Text>
            <Text style={{fontSize : 30, marginTop : 30}}>Count : {count}</Text>
            <Button title='Press' onPress={() => setCount(count + 1)}/>
        </View>
    );
};

export default UseEffectHook;