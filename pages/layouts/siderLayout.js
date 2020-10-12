import React, { Component } from 'react';
import styles from '../../styles/siderLayout.module.css'
import { Layout, Breadcrumb } from 'antd';
import { withRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars';
import LeftNavBar from '../components/leftNavBar';

const { Header, Content, Footer} = Layout;

class SiderLayout extends Component {
  

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

  

  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavBar/>
        <Layout className={styles.siteLayout}>
          <Header className={styles.topNav}>
            <Breadcrumb className={styles.breadcrumb} separator=">">
              {this.BreadcrumbItems}
            </Breadcrumb>
          </Header>
          <Content className={styles.content}>
            <Scrollbars style={{minHeight: 500}} renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}>
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