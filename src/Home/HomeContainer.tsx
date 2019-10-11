import React, {Component} from 'react';
import {Actions} from "react-native-router-flux";

export interface OwnProps {
    Layout: any;
}

type Props = OwnProps & OutgoingProps;

export default class HomeContainer extends Component<Props>{
    gotoPage1 = () => {
        Actions.page1();
    };

    gotoPage2 = () => {
        Actions.page2();
    };

    gotoPage3 = () => {
        Actions.page3();
    };

    render(){
        const {Layout} = this.props;
        const outgoingProps: OutgoingProps = {
            gotoPage1: this.gotoPage1,
            gotoPage2: this.gotoPage2,
            gotoPage3: this.gotoPage3,
        };
        return <Layout {...outgoingProps}/>
    }
}

export type OutgoingProps = {
    gotoPage1: () => void,
    gotoPage2: () => void,
    gotoPage3: () => void,
};

