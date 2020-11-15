import React, { Component } from 'react'
import GameListLayout from './layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import { Row, Col } from 'antd';

class GeneralGameList extends Component {
  render() {
    return (
      <GameListLayout title="General Game" subTitle="Compete with People, But is not rated" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="general" />
          </Col>
          <Col lg={{ span: 2 }} />
        </Row>
      </GameListLayout>
    )
  }
}

export default GeneralGameList;