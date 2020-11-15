import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styles from '../styles/navBar.module.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className = {styles.navBarContainer}>
        <Row gutter={[8]}>
          <Col lg={{ span: 3 }}>
            <img className = {styles.mainLogo}src = "/hori-logo.png"/>
          </Col>

          <Col lg={{ span: 2 }}>
            Game
          </Col>

          <Col lg={{ span: 2 }}>
            Ranking
          </Col>

          <Col lg={{ span: 2 }}>
            Award
          </Col>

          <Col lg={{ span: 2 }}>
            Blog
          </Col>

          <Col lg={{ span: 11 }}>
          </Col>

          <Col lg={{ span: 2 }}>
            Profile
          </Col>
        </Row>
      </nav>
    )
  }
}

export default NavBar;