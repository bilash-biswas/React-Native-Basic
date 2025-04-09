import { View, Text, TouchableOpacity, StyleSheet, Button, TouchableHighlight } from 'react-native';
import React from 'react';

const StyleWithButton = () => {
    return (
        <View>
            <Text style={{fontSize : 30, textAlign:'center'}}>Style With Button</Text>

            <Button title='Basic Button' color={'red'}/>

            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
                <Text style={styles.buttonText}>Touchable Opacity</Text>
            </TouchableOpacity>

            <TouchableHighlight underlayColor={'red'} style={styles.button} onPress={() => {
                console.log("Hi Bilash");
            }}>
                <Text style={styles.buttonText}>Touchable Highlight</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    button : {
        margin : 20,
        backgroundColor : '#4e31aa',
        padding : 20,
        borderRadius : 25,
        elevation : 5
    },
    buttonText : {
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center'
    }
});

export default StyleWithButton;