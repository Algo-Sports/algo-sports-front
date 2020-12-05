/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';
import { Link } from 'react-router-dom';
import GameParticipateCard from '../components/gameParticipateCard';
import CodeInputCard from '../components/codeInputCard';


class GameContentLayout extends Component {
  state = {
    code : "",
  }
  
  componentDidMount() {
  }

  render() {
    const {game, ranking, gameResult} = this.props;
    return (
      <>
        <nav className = "game-detail-nav">
          <Link to="/gamelist">
            <h1 style = {{lineHeight: "60px"}}>
              &lt; Back to Game List
            </h1>
          </Link>
        </nav>
          <Row className = "padding-20" style = {{minHeight: "90%"}}>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
              <Col lg={{ span: 11 }} md={{ span: 11 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
                <GameDetail game = {game} ranking = {ranking} gameResult = {gameResult}/>
              </Col>
              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
              <Col lg={{ span: 11}} md={{ span: 11 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
                <CodeInputCard code = {this.state.code}/>
              </Col>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          </Row>
      </>
    )
  }
}

export default GameContentLayout;