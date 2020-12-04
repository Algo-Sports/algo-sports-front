/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import styles from '../styles/navBar.module.css';
import { connect } from 'react-redux';

import {
  UserOutlined,
} from '@ant-design/icons';
import { userActions } from '../_actions';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    this.props.signout();
  }

  render() {
    const {loggedIn, user} = this.props;

    return (
      <nav className={styles.navBarContainer}>
        <Row gutter={[8]}>
          <Col lg={{ span: 3 }}>
            <Link to="/">
              <img className={styles.mainLogo} src="/hori-logo.png" alt = "logo"/>
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to="/gamelist">
              Game
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to="/ranking">
              Ranking
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to="/awardList">
              Award
            </Link>
          </Col>

          <Col lg={{ span: 2 }}>
            <Link to="/postList">
              Blog
            </Link>
          </Col>

          <Col lg={{span: 9}}>
          </Col>
          {
            loggedIn?
            <Col lg = {{span: 4}}>
              <Row className = "height-100">
                <Col lg={{ span: 12 }}>
                  <a onClick = {this.handleSignOut}>
                    Signout
                  </a>
                </Col>
                <Col lg={{ span: 12 }} style={{ lineHeight: "100%" }}>
                  <Link to="/profile">
                    <UserOutlined style={{ fontSize: "30px", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
                  </Link>
                </Col>
              </Row>
            </Col>
            :
            <Col lg = {{span: 4}}>
              <Row className = "height-100">
                <Col lg={{ span: 12 }}>
                  <Link to = "/signin">
                    SignIn
                  </Link>
                </Col>
                <Col lg={{ span: 12 }}>
                  <Link to = "signup">
                    Sign Up
                  </Link>
                </Col>
              </Row>
            </Col>
          }
        </Row>
      </nav>
    )
  }
}

function mapState(state) {
  const { authentication } = state;
  const { loggedIn, user } = authentication;
  return { loggedIn, user };
}

const actionCreators = {
  signout : userActions.signout,
}

const connectedNavBar= connect(mapState, actionCreators)(NavBar);
export { connectedNavBar as NavBar };