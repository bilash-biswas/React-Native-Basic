import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const FlatListExample = () => {

    const data = [
        { id: '1', name: 'Apple', description: 'A sweet red fruit' },
        { id: '2', name: 'Banana', description: 'A yellow fruit high in potassium' },
        { id: '3', name: 'Orange', description: 'A citrus fruit rich in Vitamin C' },
        { id: '4', name: 'Mango', description: 'A tropical stone fruit' },
        { id: '5', name: 'Apple', description: 'A sweet red fruit' },
        { id: '6', name: 'Banana', description: 'A yellow fruit high in potassium' },
        { id: '7', name: 'Orange', description: 'A citrus fruit rich in Vitamin C' },
        { id: '8', name: 'Mango', description: 'A tropical stone fruit' },
        { id: '9', name: 'Apple', description: 'A sweet red fruit' },
        { id: '10', name: 'Banana', description: 'A yellow fruit high in potassium' },
        { id: '11', name: 'Orange', description: 'A citrus fruit rich in Vitamin C' },
        { id: '12', name: 'Mango', description: 'A tropical stone fruit' },
    ];

    const handelItemPress = (item) => {
        Alert.alert('Item Clicked', `You clicked on ${item.name}`);
    }

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => handelItemPress(item)} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    )

    const renderSeparator = () => <View style={styles.separator}/>;
    

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Fruit List</Text>
            <FlatList 
                data={data}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}/>
        </View>
    );
};

export default FlatListExample;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        backgroundColor : '#f0f0f0'
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 10,
        textAlign : 'center'
    },
    itemContainer : {
        backgroundColor : '#fff',
        padding : 15,
        borderRadius : 8,
        marginVertical : 8,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.2,
        shadowRadius : 4,
        elevation : 2,
    },
    itemName : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    itemDescription : {
        fontSize : 14,
        color : '#666',
        marginTop : 5
    },
    separator : {
        height : 1,
        backgroundColor : '#ccc',
        marginHorizontal : 20,
    }
});
