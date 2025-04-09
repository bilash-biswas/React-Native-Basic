import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import React, { lazy, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(false);
    return (
        <View  style={styles.container}>
            {/* <ActivityIndicator size={'small'} color={'red'}/> */}
            <TouchableOpacity style={styles.button} onPress={() => setLoading(!loading)}>
                <Text style={styles.buttonText}>
                    {
                        loading ? 'Hide Loader' : 'Show Loader'
                    }
                </Text>
            </TouchableOpacity>
            {
                loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size={'large'} color={'red'}/>
                        <Text style={styles.buttonText}>Loading...</Text>
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f0f0f0',
    },
    button : {
        paddingVertical : 12,
        paddingHorizontal : 20,
        backgroundColor : 'red',
        borderRadius : 10,
        marginBottom : 10,
    },
    buttonText : {
        fontSize : 20,
        tintColor : '#fff',
        fontWeight : 'bold'
    },
    loaderContainer : {
        width : 120,
        height : 120,
        backgroundColor : '#fff',
        borderRadius : 12,
        justifyContent : 'center',
        alignItems : 'center',
        shadowColor : '#000',
        elevation : 5
    }, 
    loadingText : {
        marginTop : 10,
        fontSize : 18,
        color : 'red',
        fontWeight : '600',
    }
});

export default Loader;