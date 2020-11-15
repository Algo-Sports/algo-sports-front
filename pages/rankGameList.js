import React, { Component } from 'react'
import GameListLayout from './layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import { Row, Col } from 'antd';

class RankGameList extends Component {
  render() {
    return (
      <GameListLayout title="Rank Game" subTitle="Is it rated?" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="rank" />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default RankGameList;