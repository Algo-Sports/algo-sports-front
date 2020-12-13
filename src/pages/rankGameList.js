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
    game_room_loading: true, 
    game_room_list: [],
    hasError: false,
  }

  constructor(props) {
    super(props);
    this.onGoingnGameData = onGoingGame;
    this.pastGameData = pastGame;
    this.patchGameList = this.patchGameList.bind(this);
  }

  componentDidMount() {
    this.patchGameList();
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  patchGameList = async () => {
    this.setState({
      ...this.state,
      game_room_loading: true,
    })

    var requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }

    try {
      let response = await fetch(`${BASE_API_URL}/games/room/`, requestOptions);
      response = await handleTokenResponse(response, `${BASE_API_URL}/games/room/`, requestOptions)
      this.setState({
        ...this.state,
        game_room_list : response,
        game_room_loading: false,
      })
      console.log(response);
    }
    catch(error) {
      console.log(error);
      if(error === "403") {
        let response = await handleTokenResponse(response, `${BASE_API_URL}/games/room/`, requestOptions)
        this.setState({
          ...this.state,
          game_room_list : response,
          game_room_loading: false,
        })
      } 
      this.setState({
        ...this.state,
        game_room_list: [],
        game_room_loading: true, 
      })
    }

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