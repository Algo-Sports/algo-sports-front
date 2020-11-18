import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Link from 'next/link'

import styles from '../styles/navBar.module.css';
import {
  UserOutlined,
} from '@ant-design/icons';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className = {styles.navBarContainer}>
        <Row gutter={[8]}>
          <Col lg={{ span: 3 }}>
            <Link href = "/">
              <a>
                <img className = {styles.mainLogo} src = "/hori-logo.png"/>
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link href = "/gameList">
              <a>
                Game
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link href = "/ranking">
              <a>
                Ranking
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link href = "/awardList">
              <a>
                Award
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link href = "/postList">
              <a>
                Blog
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 11 }}>
          </Col>
          <Col lg={{ span: 2 }} style = {{lineHeight: "100%"}}>
            <Link href = "/profile">
              <a>
                <UserOutlined style={{fontSize: "30px", position: "absolute", top: "50%", transform: "translateY(-50%)"}} />
              </a>
            </Link>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default NavBar;