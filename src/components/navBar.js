import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {Route, Link} from 'react-router-dom'
import styles from '../styles/navBar.module.css';
import App from '../App';

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
            <Link to = "/">
                <img className = {styles.mainLogo} src = "/hori-logo.png"/>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to = "/game">
              <a>
                Game
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to = "/ranking">
              <a>
                Ranking
              </a>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to = "/awardList">
                Award
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to = "/postList">
                Blog
            </Link>
          </Col>

          <Col lg={{ span: 11 }}>
          </Col>
          <Col lg={{ span: 2 }} style = {{lineHeight: "100%"}}>
            <Link to = "/profile">
                <UserOutlined style={{fontSize: "30px", position: "absolute", top: "50%", transform: "translateY(-50%)"}} />
            </Link>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default NavBar;