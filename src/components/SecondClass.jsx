import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';

class SecondClass extends Component {
    constructor(){
        super();
        this.state = {
            myName : 'Bilash',
            age : 26,
        }
    }

    updateName = () => {
        this.setState({myName : 'Probir'})
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize : 30 }}>Name : {this.state.myName}</Text>
                <Text style={{ fontSize : 30 }}>Age : {this.props.data}</Text>
                <Button title='Update Name' onPress={this.updateName}/>
            </View>
        );
    };
};

export default SecondClass;