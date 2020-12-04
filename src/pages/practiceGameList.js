import React, { Component } from 'react'
import GameListLayout from '../layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import PastGameTable from '../components/pastGameTable';
import { Row, Col } from 'antd';

const onGoingnGameData = [
  {
    "name": "Pr AAAA AAAA",
    "id": 9,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser": 1100,
  },
  {
    "name": "Pr BBBB BB",
    "id": 10,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":900,
  },
  {
    "name": "Pr CC",
    "id": 11,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":1200,
  }
]

const pastGameData = [
  {
    "name": "AAAA AAAA",
    "id": 1,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":1100,
  },
  {
    "name": "BBBB BB",
    "id": 2,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":900,
  },
  {
    "name": "CC",
    "id": 3,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":1200,
  }
]

class PracticeGameList extends Component {
  constructor(props) {
    super(props);
    this.onGoingnGameData = onGoingnGameData;
    this.pastGameData = pastGameData;
  }

  render() {
    return (
      <GameListLayout title="Practice" subTitle="Practice algo-sports with bot" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="practice" data = {this.onGoingnGameData} />
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