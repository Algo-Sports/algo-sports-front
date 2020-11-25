import React, { Component } from 'react';
import BaseLayout from '../layouts/baseLayout';
import GeneralGameList from './generalGameList';
import PracticeGameList from './practiceGameList';
import RankGameList from './rankGameList';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


class GameList extends Component {
    render() {
        return (
            <BaseLayout>
                <Tabs type="card" defaultActiveKey="1" centered className = {"gameTabContainer"}>
                    <TabPane tab="General Game" key="1">
                        <GeneralGameList/>
                    </TabPane>
                    <TabPane tab="Rank Game" key="2">
                        <RankGameList/>
                    </TabPane>
                    <TabPane tab="Practice" key="3">
                        <PracticeGameList/>
                    </TabPane>
                    {/* <TabPane tab="Create Game" key="4">
                        <PracticeGameList/>
                    </TabPane> */}
                </Tabs>
            </BaseLayout>
        )
    }
}

export default GameList;