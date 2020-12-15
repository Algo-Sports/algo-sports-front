import React, { Component } from 'react'
import BaseLayout from '../layouts/baseLayout';
import Banner from '../components/banner';
import ExperienceChart from '../components/experienceChart';
import WinningRateChart from '../components/winningRateChart';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.experienceData = [
      {
        name: 'Round #123', date: '2020.09.20', score: 4000,
      },
      {
        name: 'Round #124', date: '2020.09.21', score: 3000,
      },
      {
        name: 'Round #125', date: '2020.09.22', score: 2000,
      },
      {
        name: 'Round #126', date: '2020.09.23', score: 2780,
      },
      {
        name: 'Round #127', date: '2020.09.24', score: 1890,
      },
      {
        name: 'Round #128', date: '2020.09.25', score: 2390,
      },
      {
        name: 'Round #129', date: '2020.09.26', score: 3490,
      },
      {
        name: 'Round #130', date: '2020.09.10', score: 3490,
      },
    ];


    this.winningRateData = [
      {
        gamename: '총쏘기 게임', rate: 56.5,
      },
      {
        gamename: '땅따먹기 게임 1', rate: 50,
      },
      {
        gamename: '땅따먹기 게임 2', rate: 86,
      },
      {
        gamename: '총쏘기 게임 2', rate: 65,
      },
      {
        gamename: '풍선 터뜨리기', rate: 85,
      },
      {
        gamename: '길찾기', rate: 65,
      },
    ];

    this.losingRateData = [
      {
        gamename: '총쏘기 게임', rate: 44.5,
      },
      {
        gamename: '땅따먹기 게임 1', rate: 50,
      },
      {
        gamename: '땅따먹기 게임 2', rate: 14,
      },
      {
        gamename: '총쏘기 게임 2', rate: 35,
      },
      {
        gamename: '풍선 터뜨리기', rate: 15,
      },
      {
        gamename: '길찾기', rate: 35,
      },
    ];
  }

  render() {
    const {loggedIn, user} = this.props;
    
    if(!loggedIn) {
      return (
        <Redirect to = "/signin"/>
      )
    }
    return (
      <BaseLayout>
        <Banner title={user.user.username} subtitle="Hello," message={user.user.email} />
        <Row style = {{padding: 20}}>
          <Col xs = {1} md = {2} lg = {2}/>
          <Col xs={22} md={20} lg={20}>
            <ExperienceChart data={this.experienceData} dataKey={"score"} height={300} />
          </Col>
          <Col xs = {1} md = {2} lg = {2}/>
          <Col xs={24} md={12} lg={12}>
            <WinningRateChart data={this.winningRateData} dataKey={"rate"} height={300} minHeight={300} fillColor={"#7095FF"} />
          </Col>
          <Col xs={24} md={12} lg={12}>
            <WinningRateChart data={this.losingRateData} dataKey={"rate"} height={300} minHeight={300} fillColor={"#FF7070"} />
          </Col>
        </Row>
      </BaseLayout>
    )
  }
}

function mapState(state) {
  const { authentication } = state;
  const { loggedIn, user } = authentication;
  return { loggedIn, user };
}

const actionCreators = {
}

const connectedProfile = connect(mapState, actionCreators)(Profile);
export { connectedProfile as Profile };