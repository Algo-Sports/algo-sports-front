import React, { Component } from 'react'
import GameContentLayout from '../layouts/gameContentLayout';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authHeader, handleTokenResponse } from '../_helpers';
import { BASE_API_URL } from '../_constants';

class Game extends Component {
  state = {
    loading: true,
    game: {
      game_id: 0,
      game_name: "",
      game_content: "/laysor.pdf",
      game_summary: ""
    },
    
    rankingList: [
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
  }

  componentDidMount() {
    this.patchGameContent();
  }

  patchGameContent = () => {
    this.setState({
      ...this.state,
      loading: true,
    })
    var requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }

    fetch(`${BASE_API_URL}/games/room/${this.props.match.params.game_id}`, requestOptions)
    .then(res => handleTokenResponse(res, `${BASE_API_URL}/games/room/${this.props.match.params.game_id}`, requestOptions))
    .then(res => {
      this.setState({
        ...this.state,
        loading: false,
        game: res,
      })
      this.setState({
        ...this.state,
        game:{
          ...this.state.game,
          game_content: "/laysor.pdf",
        }
      })
      return res;
    })
    .catch(e => {
      console.log(e);
      this.setState({
        ...this.state,
        loading: false,
        game : {
          game_id: 0,
          game_name: "",
          game_content: "/laysor.pdf",
          game_summary: ""
        },
      })
    });
  }

  render() {
    const {loggedIn} = this.props;
    const {rankingList, game, loading} = this.state;

    return (
      loggedIn ? <GameContentLayout loading = {loading} game= {game} ranking = {rankingList}/>:<Redirect to = "/signin"/>
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