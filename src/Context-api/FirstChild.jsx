import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import SubChild from './SubChild';
import { CounterContext } from './Parent';

const FirstChild = () => {
    const {count, incrementCount} = useContext(CounterContext);
    return (
        <View>
            <Text>{count}</Text>
            <Button title='increment' onPress={incrementCount} />
            <SubChild />
        </View>
    );
};

export default FirstChild;