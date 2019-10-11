import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from "./styles";
type State = {};
import {OutgoingProps as Props} from './HomeContainer';

export default class HomeLayout extends Component<Props, State>{

    render() {
        const {gotoPage1, gotoPage2, gotoPage3} = this.props;
        return (
            <View style={styles.container}>
                <Text>Hello, world!</Text>
                <Button onPress={gotoPage1} title='Page1' />
                <Button onPress={gotoPage2} title='Page2' />
                <Button onPress={gotoPage3} title='Page3' />
            </View>
        );
    }
}

