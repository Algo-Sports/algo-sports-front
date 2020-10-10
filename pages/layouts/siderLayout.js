import React, { Component } from 'react';
import styles from '../../styles/siderLayout.module.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import Router from 'next/router'
import {
  DotChartOutlined,
  RiseOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderLayout extends Component {
  
  state = {
    collapsed: false,
  };

  constructor(props) {
    super(props);
    this.location = this.props.location;
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className={styles.leftSideNav} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} onClick  = {() => Router.push('/')}/>
          <Menu className={styles.leftSideNavMenu} mode="inline">
            <Menu.Item className={styles.leftSideNavMenuItem} key="1" icon={<UserOutlined />} onClick  = {() => Router.push('/profile')}>
              username
            </Menu.Item>
            <SubMenu className={styles.leftSideNavSubMenu} key="GameOption" icon={<DotChartOutlined />} title="Game">
              <Menu.Item className={styles.leftSideNavSubMenuItem} key="gameList" onClick  = {() => Router.push('/gamelist')}>
                Game List
              </Menu.Item>
              <Menu.Item className={styles.leftSideNavSubMenuItem} key="createGame" onClick  = {() => Router.push('/createGame')}>
                Create Game
              </Menu.Item>
            </SubMenu>
            <Menu.Item className={styles.leftSideNavMenuItem} key="2" icon={<RiseOutlined />} onClick  = {() => Router.push('/ranking')}>
              Ranking
            </Menu.Item>
            <Menu.Item className={styles.leftSideNavMenuItem} key="3" icon={<TrophyOutlined />} onClick  = {() => Router.push('/award')}>
              Award
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className={styles.siteLayout}>
          <Header className={styles.topNav}>
            <Breadcrumb className={styles.breadcrumb} separator=">">
              <Breadcrumb.Item className={styles.breadcrumbItem}>User</Breadcrumb.Item>
              <Breadcrumb.Item className={styles.breadcrumbItem}>Profile</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content className={styles.content}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
    <Footer className={styles.footer}> Algo sports ©2020 Created by KMU Algo Sports {this.location}</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SiderLayout;