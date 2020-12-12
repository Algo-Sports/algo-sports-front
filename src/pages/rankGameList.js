import React, { Component } from 'react'
import GameListLayout from '../layouts/gameListLayout'
import OnGoingGameTable from '../components/onGoingGameTable';
import PastGameTable from '../components/pastGameTable';
import { Row, Col } from 'antd';

import {onGoingGame, pastGame} from '../data/data';
import { BASE_API_URL } from '../_constants';
import { authHeader, handleTokenResponse } from '../_helpers';

class RankGameList extends Component {
  state = {
    game_room_list: [],
  }

  constructor(props) {
    super(props);
    this.onGoingnGameData = onGoingGame;
    this.pastGameData = pastGame;
  }

  componentDidMount() {
    this.patchReComment();
  }

  patchReComment = async () => {

    var requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }

    var ret = fetch(`${BASE_API_URL}/games/room/`, requestOptions)
    .then(res => handleTokenResponse(res, `${BASE_API_URL}/games/room/`, requestOptions))
    .then(res => {
      this.setState({
        ...this.state,
        game_room_list : res
      })
      return res;
    })
    .catch(e => {
      console.log(e);
    });
  }


  render() {
    const {loggedIn} = this.props;
    const {game_room_list} =  this.state;
    return (
      <GameListLayout title="Rank Game" subTitle="Is it rated?" >
        <Row gutter={[8, 0]}>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <OnGoingGameTable category="rank" data = {game_room_list} loggedIn = {loggedIn}/>
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