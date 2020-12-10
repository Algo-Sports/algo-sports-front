/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import styles from '../styles/navBar.module.css';
import { connect } from 'react-redux';

import {
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { userActions } from '../_actions';

class NavBar extends Component {
  state = {
    navbarExpanded: false,
  }

  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleExpanded = this.handleExpanded.bind(this);
  }

  handleSignOut() {
    this.props.signout();
  }

  handleExpanded() {
    this.setState({
      navbarExpanded: !this.state.navbarExpanded,
    })
  }


  render() {
    const { loggedIn } = this.props;
    const { navbarExpanded } = this.state;

    return (
      <nav className = {styles.navBarContainer} > {/*className={navbarExpanded ? styles.navBarContainerExpanded : styles.navBarContainer}*/}
        <Row gutter={[8]}>
          <Col lg={{ span: 3 }} md={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 8 }}>
            <Link to="/">
              <img className={styles.mainLogo} src="/hori-logo.png" alt="logo" />
            </Link>
          </Col>
          <Col lg={{ span: 21 }} md={{ span: 18 }} sm={{ span: 0 }} xs={{ span: 0 }}>
            <Row>
              <Col lg={{ span: 2 }} md={{ span: 3 }}>
                <Link to="/gamelist">
                  Game
                </Link>
              </Col>

              <Col lg={{ span: 2 }} md={{ span: 3 }}>
                <Link to="/ranking">
                  Ranking
                </Link>
              </Col>

              <Col lg={{ span: 2 }} md={{ span: 3 }}>
                <Link to="/awardList">
                  Award
                </Link>
              </Col>

              <Col lg={{ span: 2 }} md={{ span: 3 }}>
                <Link to="/postList">
                  Blog
                </Link>
              </Col>

              <Col lg={{ span: 12 }} md={{ span: 4 }}>
              </Col>
              {
                loggedIn ?
                  <Col lg={{ span: 4 }} md={{ span: 6 }}>
                    <Row className="height-100">
                      <Col lg={{ span: 12 }} md={{ span: 12 }}>
                        <a onClick={this.handleSignOut}>
                          Signout
                      </a>
                      </Col>
                      <Col lg={{ span: 12 }} md={{ span: 12 }} style={{ lineHeight: "100%" }}>
                        <Link to="/profile">
                          <UserOutlined style={{ fontSize: "30px", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                  :
                  <Col lg={{ span: 4 }} md={{ span: 6 }}>
                    <Row className="height-100">
                      <Col lg={{ span: 12 }} md={{ span: 12 }}>
                        <Link to="/signin">
                          SignIn
                      </Link>
                      </Col>
                      <Col lg={{ span: 12 }} md={{ span: 12 }}>
                        <Link to="signup">
                          Sign Up
                      </Link>
                      </Col>
                    </Row>
                  </Col>
              }
            </Row>
          </Col>

          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 12 }} xs={{ span: 12 }} />
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 4 }} xs={{ span: 4 }}>
            <MenuOutlined style={{ fontSize: "1.3rem" }} onClick={this.handleExpanded} />
          </Col>
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Row  className = {navbarExpanded? styles.navbarExpandedContainer : styles.navBarUnExpandedContainer}>
              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                <Link to="/gamelist">
                  Game
                </Link>
              </Col>
              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Link to="/ranking">
                  Ranking
                </Link>
              </Col>

              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Link to="/awardList">
                  Award
                    </Link>
              </Col>

              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Link to="/postList">
                  Blog
                </Link>
              </Col>
              {
                loggedIn ?
                  <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <a onClick={this.handleSignOut}>
                      Signout
                    </a>
                  </Col> :
                  <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Link to="/signin">
                      SignIn
                      </Link>
                  </Col>}

              {
                loggedIn ?
                  <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Link to="/profile">
                      Profile
                    </Link>
                  </Col> :
                  <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Link to="signup">
                      Sign Up
                      </Link>
                  </Col>
              }

            </Row>
          </Col>
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
  signout: userActions.signout,
}

const connectedNavBar = connect(mapState, actionCreators)(NavBar);
export { connectedNavBar as NavBar };