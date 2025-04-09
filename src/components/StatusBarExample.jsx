import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const StatusBarExample = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor='rgba(0,0,0,0.1)'
                hidden={false}
                translucent={true}
            />
            <Text style={styles.text}>StatusBarExample</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#6200fe'
    }, 
    text : {
        fontSize : 30,
        fontWeight : 'bold',
        color : '#fff'
    }
});

export default StatusBarExample;