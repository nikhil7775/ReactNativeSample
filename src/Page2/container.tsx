import React from 'react';

import { Actions } from 'react-native-router-flux';
// import insertBowlDoor from 'native/statics/images/insert_bowl_door.gif';
// import insertBowlNoDoor from 'native/statics/images/insert_bowl_no_door.gif';

export interface OwnProps {
    Layout: any;
}

type Props = OwnProps & OutgoingProps & StateProps;

type State = {
    isModalVisible: boolean;
};

class InsertBowlContainer extends React.PureComponent<Props, State> {
    state = {
        isModalVisible: false,
    };

    dispense = () => {
        this.setState({ isModalVisible: false }, Actions.dispenseBowl);
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };

    backPress = () => {
// TODO: logic to cancel any jobs running
        Actions.pop();
    };

    render = () => {
        const { Layout } = this.props;
// Currently passing both the animation. Later we can evaluate if machine has door and pass corresponding gif

        const outgoingProps: OutgoingProps = {
            dispense: this.dispense,
            backPress: this.backPress,
            animations: true,
            isModalVisible: this.state.isModalVisible,
            closeModal: this.closeModal,
        };

        return <Layout {...outgoingProps} />;
    };
}

export type OutgoingProps = {
    dispense: () => void;
    backPress: () => void;
    animations: any;
    isModalVisible: boolean;
    closeModal: () => void;
};

interface StateProps {
    _jobsRunning: boolean | null;
    _hasJobsErrors: boolean | null;
}