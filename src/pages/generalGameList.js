import React, { Component } from 'react'
import GameListLayout from '../layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import { Row, Col } from 'antd';
import PastGameTable from '../components/pastGameTable';
import {pastGame} from '../data/data';

class GeneralGameList extends Component {
  constructor(props) {
    super(props);
    this.onGoingGame = [];
    this.pastGame = pastGame;
  }

  render() {
    const {loggedIn} = this.props;
    return (
      <GameListLayout title="General Game" subTitle="Compete with People, But is not rated" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="general" data = {this.onGoingGame} loggedIn = {loggedIn}/>
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <PastGameTable category="general" data = {this.pastGame} />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default GeneralGameList;