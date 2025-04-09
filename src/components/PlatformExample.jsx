import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                {
                    Platform.OS === 'android' ? 'Welcome Android User!' : 'Welcome IOS User!'
                }
            </Text>
            <Text style={styles.platformText}>
                {
                    Platform.select({
                        ios : 'You are using IOS Device',
                        android : 'You are using Android Device',
                        macos : 'You are using macOS Device',

                    })
                }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Platform.select({
            ios : 'green',
            android : 'purple',
            macos : 'red'
        })
    },
    welcomeText : {
        fontSize : 24,
        color : Platform.OS !== 'android' ? 'white' : 'green',
        marginBottom : 20
    },
    platformText : {
        fontSize : 18,
        color : '#fff'
    }
});

export default PlatformExample;