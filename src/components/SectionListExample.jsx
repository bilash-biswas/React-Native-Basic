import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const listItem = [
    {
        title : 'Fruits',
        data : [
            { id : 1, name : 'Apple'},
            { id : 2, name : 'Mango'},
            { id : 3, name : 'Orange'},
            { id : 4, name : 'Banana'},
        ]
    },
    {
        title : 'Vegetables',
        data : [
            { id : 5, name : 'Carrot'},
            { id : 6, name : 'Potato'},
            { id : 7, name : 'Tomato'},
            { id : 8, name : 'Banana'},
        ]
    }
]

const SectionListExample = () => {
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    )

    const renderSectionHeader = ({section}) => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <SectionList 
                sections={listItem}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.id}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#f0f0f0',
        paddingTop : 15,
    },
    item : {
        backgroundColor : '#add8e6',
        padding : 10,
        marginVertical : 5,
        borderRadius : 5,
    },
    title : {
        fontSize : 18,
    },
    header : {
        backgroundColor : '#90ee90',
        padding : 10,
        borderRadius : 5,
        marginVertical : 5
    },
    headerTitle : {
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold'
    }
});


export default SectionListExample;