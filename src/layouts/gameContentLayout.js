import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';
import { Link } from 'react-router-dom';
import GameParticipateCard from '../components/gameParticipateCard';


class GameContentLayout extends Component {
  state = {
    game: {
      game_id: null,
      game_name: "",
    },
    rankingList: [],
  }

  constructor(props) {
    super(props);
    this.setState({ ...this.state, game: this.props.game });
    this.setState({ ...this.state, rankingList: this.props.ranking });
  }

  render() {
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
          <Col lg={{ span: 14 }} md={{ span: 14 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
            <GameDetail game = {this.props.game} ranking = {this.props.ranking}/>
          </Col>
          <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          <Col lg={{ span: 7}} md={{ span: 7 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
            <GameParticipateCard game = {this.props.game}/>
          </Col>
          <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
        </Row>
        {this.props.children}
      </>
    )
  }
}

export default GameContentLayout;