import React, { Component } from 'react'
import { Tabs } from 'antd';
import GameDescription from './gameDescription';
import GameRanking from './gameRanking';
import {GameResultTable} from './gameResultTable'
const { TabPane } = Tabs;

class GameDetail extends Component {
  render() {
    const {game, ranking, gameResult} = this.props;
    return (
      <Tabs type="card" defaultActiveKey="1" className="gameDetailTab height-100">
        <TabPane tab="Description" key="1" className = "height-100" calssName = "padding-10">
          <GameDescription game={game} />
        </TabPane>
        <TabPane tab="Ranking" key="2" className = "height-100" calssName = "padding-10">
          <GameRanking ranking = {ranking}/>
        </TabPane>
        <TabPane tab="Result" key="3" className = "height-100" calssName = "padding-10">
          <GameResultTable result = {gameResult}/>
        </TabPane>
      </Tabs>
    )
  }
}

export default GameDetail;