import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../components/banner';
import RankingTable from '../components/rankingTable';
import BaseLayout from '../layouts/baseLayout';


class Ranking extends Component {

  render() {
    return (
      <BaseLayout>
        <Banner title="Ranking" subtitle="where are you?" message="Good Luck! & High Score!" />
        <Row
          className = "padding-10 margin-top-30" >
          <Col lg = {{span: 2}}/>
          <Col lg = {{span: 20}} className = "outer-card-layout">
            <RankingTable/>
          </Col>
          <Col lg = {{span: 2}}/>
        </Row>
      </BaseLayout>
    )
  }

}

export default Ranking;