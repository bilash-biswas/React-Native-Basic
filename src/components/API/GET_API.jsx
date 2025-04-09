import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // fetch('http://192.168.0.100:3000/users').then((response) => {
        //     response.json().then((result) => {
        //         setUsers(result)
        //     }).catch((error) => {
        //         console.error('Error fetching data:', error);
        //     });
        // })
        axios.get('http://192.168.0.100:3000/users').then((result) => {
            setUsers(result.data);
        })
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GET API</Text>
            <Text style={styles.subTitle}>Number of Users : {users.length}</Text>
            {
                users.map((item, i) => (
                    <View key={i} style={styles.userContainer}>
                        <Text style={styles.userText}>{item.id}</Text>
                        <Text style={styles.userText}>{item.name}</Text>
                        <Text style={styles.userText}>{item.email}</Text>
                    </View>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 16,
        backgroundColor : '#fff'
    },
    title : {
        fontSize : 24, 
        fontWeight : 'bold',
        marginBottom : 10
    },
    subTitle : {
        fontSize : 18,
        marginBottom : 20,
    },
    userContainer : {
        padding : 10,
        borderWidth : 1,
        borderColor : '#ccc',
        borderRadius: 5,
        marginBottom : 10,
    },
    userText : {
        fontSize : 16
    }
});

export default GET_API;