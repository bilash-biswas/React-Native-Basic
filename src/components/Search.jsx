import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const contacts = [
        { id : 1, name : 'Bilash'},
        { id : 2, name : 'Probir'},
        { id : 3, name : 'Shimul'},
        { id : 4, name : 'Habib'},
        { id : 5, name : 'Nahid'},
        { id : 6, name : 'Nazmul'},
        { id : 7, name : 'Rubel'},
        { id : 8, name : 'Jehad'},
        { id : 9, name : 'Rakib'},
        { id : 10, name : 'Robiul'},
        { id : 11, name : 'Nazma'},
        { id : 12, name : 'Anik'},
    ];

    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({item}) => (
        <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact List</Text>
            <TextInput 
            style={styles.searchBar}
            placeholder='Search Contacts...'
            placeholderTextColor='#888'
            value={searchQuery}
            onChangeText={setSearchQuery}
            />

            <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#e3f2fd',
        padding : 20
    },
    title : {
        fontSize : 26,
        fontWeight : 'bold',
        color : '#1e88e5',
        marginBottom : 20,
        textAlign : 'center'
    },
    searchBar : {
        height : 40,
        borderColor : '#90caf9',
        borderWidth : 1,
        borderRadius : 20,
        paddingHorizontal : 15,
        marginBottom : 20,
        backgroundColor : '#fff'
    },
    listContainer : {
        paddingBottom : 20,
    },
    contactItem : {
        padding : 15,
        backgroundColor : '#fff',
        borderRadius : 15,
        marginBottom : 10,
        shadowColor : '#000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.15,
        shadowRadius : 5,
        elevation : 3,
        flexDirection : 'row',
        alignItems : 'center'
    },
    contactName : {
        fontSize : 18,
        color : '#424244'
    }
})

export default Search;