import React, { Component } from 'react'
import { Tabs } from 'antd';
import GameDescription from './gameDescription';
import GameRanking from './gameRanking';
const { TabPane } = Tabs;

class GameDetail extends Component {
  render() {
    return (
      <Tabs type="card" defaultActiveKey="1" className="gameDetailTab" style={{ height: "100%" }}>
        <TabPane tab="Description" key="1" style={{ height: "100%", padding: 10 }}>
          <GameDescription game={this.props.game} />
        </TabPane>
        <TabPane tab="Ranking" key="2"  style={{ height: "100%", padding: 10}}>
          <GameRanking ranking = {this.props.ranking}/>
        </TabPane>
      </Tabs>
    )
  }
}

export default GameDetail;