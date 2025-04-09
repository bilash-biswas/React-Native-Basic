import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';

const UseRefHook = () => {
    const myRef = useRef();
    const handelRef = () => {
        // myRef.current.setNativeProps({
        //     text : 'Bilash',
        //     style : {
        //         color : 'red',
        //         backgroundColor : 'green'
        //     }
        // });
        myRef.current.focus();
    }
    return (
        <View style={styles.container}>
            <TextInput 
                ref={myRef}
                style={styles.input}
                placeholder='Enter your text'
                placeholderTextColor={'#999'}
                />

            <TouchableOpacity style={styles.button} onPress={handelRef}>
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor : '#f0f0f0',
        padding : 20
    },
    input : {
        width : '100%',
        height : 50,
        backgroundColor : '#fff',
        borderRadius : 10,
        paddingHorizontal : 15,
        fontSize : 16,
        borderWidth : 1,
        borderColor : '#ccc',
        marginBottom : 20
    },
    button : {
        width : '100%',
        height : 50,
        backgroundColor : '#007bff',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }, 
    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold'
    }
});
export default UseRefHook;