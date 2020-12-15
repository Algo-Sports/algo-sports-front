import React, { Component } from 'react';
import BaseLayout from '../layouts/baseLayout';
import GeneralGameList from './generalGameList';
import PracticeGameList from './practiceGameList';
import RankGameList from './rankGameList';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
const { TabPane } = Tabs;


class GameList extends Component {
    render() {
        const {loggedIn} = this.props;
        return (
            <BaseLayout>
                <Tabs type="card" defaultActiveKey="1" key = "game_tab_container" centered className = {"gameTabContainer"}>
                    <TabPane tab="General Game" key="general_game_tab">
                        <GeneralGameList loggedIn = {loggedIn}/>
                    </TabPane>
                    <TabPane tab="Rank Game" key="rank_game_tab">
                        <RankGameList loggedIn = {loggedIn}/>
                    </TabPane>
                    <TabPane tab="Practice" key="practice_game_tab">
                        <PracticeGameList loggedIn = {loggedIn}/>
                    </TabPane>
                </Tabs>
            </BaseLayout>
        )
    }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
};

const connectedGameList = connect(mapState, actionCreators)(GameList);
export { connectedGameList as GameList };

export default GameList;