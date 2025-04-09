import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { data } from './gridData';

const Grid = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Grid</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {
                    data.map((item) => (
                        <View key={item.id} style={styles.gridItem}>
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        backgroundColor : '#f8f9fa',
    },
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
        marginVertical : 20,
        color : '#000'
    },
    container : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        padding : 10
    },
    gridItem : {
        backgroundColor : '#ff6f61',
        padding : 20,
        marginBottom : 10,
        width : '48%',
        height : 100,
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        fontSize : 18,
        color : '#fff',
        fontWeight : '700',
        textTransform : 'uppercase'
    }
});

export default Grid;