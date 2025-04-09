import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHookUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    // useEffect(() => {
    //     console.log("Counter Updating");
    // }, [counter]);
    // useEffect(() => {
    //     console.log("Score Updating");
    // }, [score]);
    return (
        <View>
            <Text style={{fontSize : 30}}>Use Effect Hook</Text>
            <Text style={{fontSize : 30}}>Counter : {counter}</Text>
            <Button title='Counter' onPress={() => setCounter(counter + 1)}/>
            <Text style={{fontSize : 30}}>Score : {score}</Text>
            <Button title='Score' onPress={() => setScore(score + 10)}/>
            <InfoDetails count={counter} points = {score}/>
        </View>
    );
};

const InfoDetails = ({count, points}) => {
    useEffect(() => {
        console.log("Counter Updating");
    }, [count]);
    useEffect(() => {
        console.log("Score Updating");
    }, [points]);
    return(
        <View>
            <Text style={{fontSize : 30, marginTop:50}}>Info Details</Text>
            <Text style={{fontSize : 30}}>Counter : {count}</Text>
            <Text style={{fontSize : 30}}>Score : {points}</Text>
        </View>
    );
};

export default UseEffectHookUpdatingPhase;