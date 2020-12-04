import React, { Component } from 'react';
import styles from '../styles/noNavLayout.module.css'
import {Layout} from 'antd'

const { Content } = Layout;

class NoNavLayout extends Component {
  render() {
    return (
        <Layout className={styles.containter}>
          <Content className={styles.contentContainer} >
              {this.props.children}
          </Content>
        </Layout>
    )
  }
}

export default NoNavLayout;