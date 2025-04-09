import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FETCH_API_DATA = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.0.100:3000/users').then((result) => {
            setMyData(result.data);
        });
    }, []);

    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>All Users</Text>
            <FlatList 
            data={myData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#e0f7fa',
        padding : 20
    },
    header : {
        fontSize : 28,
        fontWeight : 'bold',
        color : '#00796b',
        marginBottom : 20,
        textAlign : 'center'
    },
    card : {
        backgroundColor : '#fff',
        padding : 20,
        marginBottom : 15,
        borderRadius : 10,
        shadowColor : '#000',
        shadowOffset : { width : 0, height : 4},
        shadowOpacity : 0.2,
        shadowRadius : 10,
        elevation : 8,
        borderLeftWidth : 5,
        borderLeftColor : '#00796b',
    },
    name : {
        fontSize : 20,
        fontWeight : '600',
        color : '#004d40',
        marginBottom : 5,
    }, 
    email : {
        fontSize : 16,
        color : '#00796b'
    }
})

export default FETCH_API_DATA;