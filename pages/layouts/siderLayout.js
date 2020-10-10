import React, { Component } from 'react';
import styles from '../../styles/siderLayout.module.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import {
  DotChartOutlined,
  RiseOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderLayout extends Component {

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className={styles.leftSideNav} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Link href = "/">
            <a>
              <div className={styles.logo} />
            </a>
          </Link>
          <Menu className={styles.leftSideNavMenu} mode="inline">
            <Menu.Item className={styles.leftSideNavMenuItem} key="1" icon={<UserOutlined />}>
              <Link href="/profile">
                <a>
                  username
                </a>
              </Link>
            </Menu.Item>
            <SubMenu className={styles.leftSideNavSubMenu} key="GameOption" icon={<DotChartOutlined />} title="Game">
              <Menu.Item className={styles.leftSideNavSubMenuItem} key="gameList">
                <Link href = "/gamelist">
                  <a>
                    Game List
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item className={styles.leftSideNavSubMenuItem} key="createGame">
                <Link href = "/createGame">
                  <a>
                    Create Game
                  </a>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item className={styles.leftSideNavMenuItem} key="2" icon={<RiseOutlined />}>
              <Link href = "/ranking">
                  <a>
                    Ranking
                  </a>
                </Link>
            </Menu.Item>
            <Menu.Item className={styles.leftSideNavMenuItem} key="3" icon={<TrophyOutlined />}>
              <Link href = "/award">
                  <a>
                    Award
                  </a>
                </Link>
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
          <Footer className={styles.footer}> Algo sports ©2020 Created by KMU Algo Sports</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SiderLayout;