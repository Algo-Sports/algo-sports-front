import React, { Component } from 'react'
import GameContentLayout from '../layouts/gameContentLayout';

const game = {
  game_id: null,
  game_name: "aaa game",
  game_content: `Lorem Ipsum asdaarewgew  rABSKJDVSAFDSAJDFSAKD alshdas;lkdas;dakjs das.,nda jdaslkdbas ,
  masdlh salka Lorem Ipsum asdaarewgewrABSKJDVSAFDSAJDFSAKD alshdas;lkdas;dakjs das.,nda jdaslkdbas ,masdlh salk
  a Lorem Ipsum asdaarewgew  rABSKJDVSAFDSAJDFSAKD alshdas;lkdas;dakjs das.,nda jdaslkdbas ,masdlh salka`,
  game_summary: "Lorem Ipsum asdaarewgew  rABSKJDVSAFDSAJDFSAKD alshdas;lkdas;dakjs das.,nda jdaslkdbas ,masdlh salka"

};

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
    const { params } = this.props.match;

    game.game_id = params.game_id;

    return (
      this.state.ingame ? <></> :
        <GameContentLayout game= {game} ranking = {rankingList}/>
    )
  }
}
export default Game;