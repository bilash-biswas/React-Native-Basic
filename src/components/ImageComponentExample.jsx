import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';

const ImageComponentExample = () => {
    const localImage = require('../image/hero.jpg');
    const remoteImage = { uri : 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'};
    const backImage = { uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'};
    return (
        <ImageBackground
            source={backImage}
            style={styles.background}
            resizeMode='cover'
        >
            <View style={styles.content}>
                <Text style={styles.text}>React Native!</Text>
                <Image 
                source={localImage} 
                style={styles.image} 
                resizeMode='cover'
                />


                <Image 
                source={remoteImage} 
                style={styles.image} 
                resizeMode='cover'
                />
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }, 
    content : {
        padding : 20,
        backgroundColor : '#123456',
        borderRadius : 10
    },
    text : {
        fontSize : 24,
        color : 'white',
        marginBottom : 20,
    },
    image : {
        height : 200,
        width : 200,
        borderRadius : 10,
        marginTop : 20
    }
});
export default ImageComponentExample;