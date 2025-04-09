import {Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const First = () => {
    
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handelOperation = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if(isNaN(number1) || isNaN(number2)){
            Alert.alert('Please enter valid number');
        }

        let res;
        switch(operation){
            case '+':
                res = number1 + number2;
                break;
            case '-':
                res = number1 - number2;
                break;
            case '*':
                res = number1 * number2;
                break;
            case '/':
                res = number2 !== 0 ? number1 / number2 : 'Error (Divided by 0)';
                break;
        }
        setResult(res);
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Simple Calculator</Text>
            <TextInput 
                style = {styles.input}
                placeholder='Enter 1st Number' 
                value={num1}
                keyboardType='numeric'
                onChangeText={(text) => setNum1(text)}/>
                <TextInput 
                style = {styles.input}
                placeholder='Enter 2nd Number' 
                value={num2}
                keyboardType='numeric'
                onChangeText={(text) => setNum2(text)}/>

                <View style = {styles.buttonContainer}>
                    <Button title='+' onPress={() => handelOperation('+')}/>
                    <Button title='-' onPress={() => handelOperation('-')}/>
                    <Button title='*' onPress={() => handelOperation('*')}/>
                    <Button title='/' onPress={() => handelOperation('/')}/>
                </View>
                {result !== null && (
                    <Text style = {styles.result}>Result : {result}</Text>
                )}
        </View>
    );
}

export default First;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#888888'
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 20,
    },
    input : {
        width : '95%',
        borderWidth : 1,
        borderColor : '#ccc',
        borderRadius : 5,
        padding : 10,
        marginBottom : 10,
        backgroundColor : '#fff'
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '80%',
        marginVertical : 10,
    },
    result : {
        marginTop : 20,
        fontSize : 20,
        fontWeight : 'bold',
        color : '#333'
    }
});