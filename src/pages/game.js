import React, { Component } from 'react'
import GameContentLayout from '../layouts/gameContentLayout';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const rankingList = [
  {
    key: 1,
    user_id: 1,
    ranking: 1,
    username: "singun11",
    win: 100,
    lose: 20,
    tie: 5,
  },
  {
    key: 2,
    user_id: 2,
    ranking: 2,
    username: "singun19",
    win: 50,
    lose: 30,
    tie: 2,
  }
]

class Game extends Component {
  state = {
    ingame: false,
  }

  render() {
    const {loggedIn} = this.props;
    const { params } = this.props.match;

    const game = {
      game_id: params.game_id,
      game_name: "레이저 게임(2)",
      game_content: "/laysor.pdf",
      game_summary: "가장 많이 공을 맞춰보세요!"
    
    };

    return (
      loggedIn ? (
        this.state.ingame ? <></> :
          <GameContentLayout game= {game} ranking = {rankingList}/>
      )
      :<Redirect to = "/signin"/>
    )
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
};

const connectedGame = connect(mapState, actionCreators)(Game);
export { connectedGame as Game };