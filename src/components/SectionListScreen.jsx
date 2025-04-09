import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const SectionListScreen = () => {
    const DATA = [
        {
            title: "Fruits",
            data: ["Apple", "Banana", "Orange"],
        },
        {
            title: "Vegetables",
            data: ["Carrot", "Potato", "Tomato"],
        },
    ];
    return (
        <SectionList 
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section : { title }}) => (
                <Text style={styles.header}>{title}</Text>
            )}
            ListHeaderComponent={<Text style={styles.listHeader}>Shopping List</Text>}
            ListFooterComponent={<Text style={styles.listFooter}>End of List</Text>}
            />
    );
};

const styles = StyleSheet.create({
    header : {
        fontSize : 20,
        fontWeight : 'bold',
        backgroundColor : '#f4f4f4',
        padding : 4
    },
    item : {
        padding : 10,
        fontSize : 16,
    },
    listHeader : {
        fontSize : 24,
        textAlign : 'center',
        marginVertical : 10,
    },
    listFooter : {
        fontSize : 16,
        textAlign : 'center',
        marginVertical : 10,
        color : 'gray'
    }
});

export default SectionListScreen;