import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getData } from '../components/userInformation';

const About = (props) => {
    const [userName, setUserName] = useState('');
    //const {userName} = props.route.params;
    useEffect(() => {
        const fetchUserName = async () => {
            const storedName = await getData('username');
            if (storedName) {
                setUserName(storedName);
            } else {
                console.log('No username found in AsyncStorage');
            }
        };

        fetchUserName();
    }, []);
    return (
        <View>
            {/* <Text>{userName}</Text> */}
            {/* <Text>{age}</Text> */}
            <Button title='Go back' onPress={() => props.navigation.goBack()} />
                <Text>{userName}</Text>
        </View>
    );
};

export default About;