import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Actions} from "react-native-router-flux";
import {styles} from "./styles";

export default class Page1Layout extends Component<OutgoingProps>{

    render() {
        const { text, goBack } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={text}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Button onPress={goBack} title='back'>Back</Button>
            </View>
        );
    }
}

export type OutgoingProps = {
    goBack: () => void,
    text: string,
};