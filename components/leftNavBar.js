import React, { Component } from 'react';
import styles from '../styles/siderLayout.module.css'
import { Layout, Menu} from 'antd';
import {
  DotChartOutlined,
  RiseOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { withRouter } from 'next/router'
const { Sider } = Layout;
const { SubMenu } = Menu;

class LeftNavBar extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
      collapsed: false,
    };

    onCollapse = collapsed => {
      this.setState({ collapsed });
    };
  
    render() {
        return (
            <Sider className={styles.leftSideNav} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className={styles.logo} onClick  = {() => this.props.router.push('/')}/>
              <Menu className={styles.leftSideNavMenu} mode="inline">
                <Menu.Item className={styles.leftSideNavMenuItem} key="1" icon={<UserOutlined />} onClick  = {() => this.props.router.push('/profile')}>
                  username
                </Menu.Item>
                <SubMenu className={styles.leftSideNavSubMenu} key="GameOption" icon={<DotChartOutlined />} title="Game">
                  <Menu.Item className={styles.leftSideNavSubMenuItem} key="gameList" onClick  = {() => this.props.router.push('/gamelist')}>
                    Game List
                  </Menu.Item>
                  <Menu.Item className={styles.leftSideNavSubMenuItem} key="createGame" onClick  = {() => this.props.router.push('/createGame')}>
                    Create Game
                  </Menu.Item>
                </SubMenu>
                <Menu.Item className={styles.leftSideNavMenuItem} key="2" icon={<RiseOutlined />} onClick  = {() => this.props.router.push('/ranking')}>
                  Ranking
                </Menu.Item>
                <Menu.Item className={styles.leftSideNavMenuItem} key="3" icon={<TrophyOutlined />} onClick  = {() => this.props.router.push('/award')}>
                  Award
                </Menu.Item>
              </Menu>
            </Sider>
        )
    }
}

export default withRouter(LeftNavBar);