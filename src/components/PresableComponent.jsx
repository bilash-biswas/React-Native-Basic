import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PresableComponent = () => {
    const handelPress = () => {
        console.log("Pressed");
    }
    const handelPressIn = () => {
        console.log('Press In')
    }
    const handelPressOut = () => {
        console.log('Press Out')
    }
    const handelLongPress = () => {
        console.log('Long Press')
    }
    return (
        <View style={styles.container}>
            <Pressable 
                //onPress={handelPress}
                onPressIn={handelPressIn}
                onPressOut={handelPressOut}
                onLongPress={handelLongPress}
                delayLongPress={2000}
                style={styles.button}>
                    <Text style={styles.buttonText}>Text Me</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f5f5f5'
    },
    button : {
        padding : 10,
        borderRadius : 5,
        backgroundColor : '#007bff'
    },
    buttonText : {
        fontSize : 20,
        color : '#fff'
    }
});

export default PresableComponent;