import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import style from '../style/style';

const Styling = () => {
    return (
        <View>
            <Text style={{fontSize : 30, backgroundColor:'red', padding: 20, color:'white'}}>Inline Styling</Text>
            <Text style={styles.text}>Internal Styling</Text>
            <Text style={style.text}>External Styling</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        color : 'white',
        backgroundColor : 'green',
        fontSize : 30,
        marginVertical : 10,
        padding : 8,
        textAlign : 'center',
        borderColor : 'lightgreen',
        borderWidth : 2,
        borderRadius : 20
    }
});

export default Styling;