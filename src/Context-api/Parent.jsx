import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import FirstChild from './FirstChild';

export const CounterContext = createContext();

const Parent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <CounterContext.Provider value={{count, incrementCount}}>
            <View>
                <Text>Parent</Text>
            <FirstChild />
        </View>
        </CounterContext.Provider>
    );
};

export default Parent;