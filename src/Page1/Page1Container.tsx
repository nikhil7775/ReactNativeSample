import React, {Component} from 'react';
import {Actions} from "react-native-router-flux";
import {OutgoingProps} from "./Page1Layout";

export interface ownProps {
    Layout: any
}

type Props = ownProps;

type State  = {
    text: string,
}

export default class Page1Container extends Component<Props, State>{
    state = {
        text: '',
    };

    goBack = () => {
        Actions.pop();
    };

    render() {
        const { Layout } = this.props;

        const outgoingProps : OutgoingProps = {
            goBack: this.goBack,
            text: this.state.text
        }
        return (
            <Layout {...outgoingProps} />
        );
    }
}