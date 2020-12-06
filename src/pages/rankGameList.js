import React, { Component } from 'react'
import GameListLayout from '../layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import PastGameTable from '../components/pastGameTable';
import { Row, Col } from 'antd';

import {onGoingGame, pastGame} from '../data/data';

class RankGameList extends Component {
  constructor(props) {
    super(props);
    this.onGoingnGameData = onGoingGame;
    this.pastGameData = pastGame;
  }

  render() {
    return (
      <GameListLayout title="Rank Game" subTitle="Is it rated?" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="rank" data = {this.onGoingnGameData}  />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <PastGameTable category="rank" data = {this.pastGameData}/>
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default RankGameList;