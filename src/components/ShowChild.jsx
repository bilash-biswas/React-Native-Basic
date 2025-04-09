import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
    useEffect(() => {
        return() => {
            console.log("Child Component Unmount");
        }
    });
    return (
        <View>
            <Text style={{fontSize : 30}}>ShowChild</Text>
        </View>
    );
};

export default ShowChild;