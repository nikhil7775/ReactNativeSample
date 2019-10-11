import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Actions} from "react-native-router-flux";

export default function Page2() {
    return (
        <View style={styles.container}>
            <Text>Hello, world!</Text>
            <Button onPress={Actions.pop} title='back'>Back</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});