import React from 'react';

import { View, Grid, Row } from 'native-base';
import { Container } from 'native-base';
import styles from './styles';

import { OutgoingProps as Props } from '../../../../../app/pages/patron/InsertBowl';
import VerticalHeader from './VerticalHeader';
import VerticalFooter from './VerticalFooter';
import FastImage from 'react-native-fast-image';
import BowlErrorModalComponent from 'native/pages/patron/InsertBowl/VerticalTablet/BowlErrorModalComponent';
import { TranslatedTextComponent } from 'native/common/translatedText';

type State = {};

const translationIds = {
    insertBowlStringId: 'InsertBowl__insertBowl',
    behindArrowStringId: 'InsertBowl__behindArrow',
}

class VerticalTabletInsertBowl extends React.PureComponent<Props, State> {
    render = () => {
        const { dispense, goToNextPage, backPress, jobIsRunning, animations, isModalVisible, closeModal } = this.props;
        const {insertBowlStringId, behindArrowStringId} = translationIds;
        return (
            <Container>
                <Grid>
                    <Row style={styles.headerStyle}>
                        <VerticalHeader onPress={backPress} />
                    </Row>
                    <Row>
                        <View style={styles.contentStyle}>
                            <FastImage style={styles.imageStyle} source={animations.insertBowlDoor} />
                            <TranslatedTextComponent stringId={insertBowlStringId} style={styles.header1Style} />
                            <TranslatedTextComponent stringId={behindArrowStringId} style={styles.header2Style} />
                        </View>
                    </Row>
                    <Row style={styles.alertStyle}>
                        <VerticalFooter onPress={goToNextPage} isLoading={jobIsRunning} />
                    </Row>
                </Grid>
                <BowlErrorModalComponent isModalVisible={isModalVisible} closeModal={closeModal} dispense={dispense} />
            </Container>
        );
    };
}

export default VerticalTabletInsertBowl;