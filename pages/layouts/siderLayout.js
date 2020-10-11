import React, { Component } from 'react';
import styles from '../../styles/siderLayout.module.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'next/router'
import {
  DotChartOutlined,
  RiseOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderLayout extends Component {
  
  state = {
    collapsed: false,
  };

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    this.pathname = this.props.router.pathname;

    this.path = this.pathname.split('/').filter(i => i);
    this.BreadcrumbItems = this.path.map((val, idx) => {
      const url = `/${this.path.slice(0, idx+1).join('/')}`
      return (
        <Breadcrumb.Item key = {url} className={styles.breadcrumbItem} onClick  = {() => this.props.router.push({url})}>
            {this.capitalizeFirstLetter(val)}
        </Breadcrumb.Item>
      )
    })
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };


  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
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
        <Layout className={styles.siteLayout}>
          <Header className={styles.topNav}>
            <Breadcrumb className={styles.breadcrumb} separator=">">
              {this.BreadcrumbItems}
            </Breadcrumb>
          </Header>
          <Content className={styles.content}>
            <Scrollbars style={{minHeight: 500}}>
              <div style={{padding: 10}}>
                {this.props.children}
              </div>
            </Scrollbars>
          </Content>
        <Footer className={styles.footer}> Algo sports ©2020 Created by KMU Algo Sports</Footer>
        </Layout>
      </Layout>

    )
  }
}

export default withRouter(SiderLayout);