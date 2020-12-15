import React, { Component } from 'react'
import GameListLayout from '../layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import PastGameTable from '../components/pastGameTable';
import { Row, Col } from 'antd';
import {pastGame} from '../data/data';

class PracticeGameList extends Component {
  constructor(props) {
    super(props);
    this.onGoingnGameData = [];
    this.pastGameData = pastGame;
  }

  render() {
    const {loggedIn} = this.props;
    return (
      <GameListLayout title="Practice" subTitle="Practice algo-sports with bot" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="practice" data = {this.onGoingnGameData} loggedIn = {loggedIn}/>
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <PastGameTable category="practice" data = {this.pastGameData} showRanking = {false} />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default PracticeGameList;