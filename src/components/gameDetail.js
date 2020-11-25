import React, { Component } from 'react'
import { Tabs } from 'antd';
import GameDescription from './gameDescription';
const { TabPane } = Tabs;

class GameDetail extends Component {
    render() {
        return (
            <Tabs type="card" defaultActiveKey="1" centered className = {"gameDetailTab"}>
                <TabPane tab="Description" key="1">
                    <GameDescription/>
                </TabPane>
                <TabPane tab="Ranking" key="2">
                   
                </TabPane>
            </Tabs>
        )
    }
}

export default GameDetail;