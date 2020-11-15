import React, { Component } from 'react'
import GameListLayout from './layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import { Row, Col } from 'antd';

class PracticeGameList extends Component {
  render() {
    return (
      <GameListLayout title="Practice" subTitle="Practice algo-sports with bot" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="practice" />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default PracticeGameList;