import { Text, View } from 'react-native';
import React, { Component } from 'react';
import SecondClass from './SecondClass';

class ClassComponents extends Component {
    render() {
        const age = 30;
        return (
        <View>
            <Text style={{ fontSize : 30 }}>ClassComponents</Text>
            <SecondClass data={age}/>
        </View>
        )
    };
};

export default ClassComponents;