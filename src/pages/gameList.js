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
                <Tabs type="card" defaultActiveKey="1" centered className = {"gameTabContainer"}>
                    <TabPane tab="General Game" key="1">
                        <GeneralGameList loggedIn = {loggedIn}/>
                    </TabPane>
                    <TabPane tab="Rank Game" key="2">
                        <RankGameList loggedIn = {loggedIn}/>
                    </TabPane>
                    <TabPane tab="Practice" key="3">
                        <PracticeGameList loggedIn = {loggedIn}/>
                    </TabPane>
                    {/* <TabPane tab="Create Game" key="4">
                        <PracticeGameList/>
                    </TabPane> */}
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