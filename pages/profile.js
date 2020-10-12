import React, { Component } from 'react';
import BaseLayout from './layouts/baseLayout'
import {Row, Col} from 'antd'
import ExperienceChart from '../pages/components/experienceChart';
import WinningRateChart from '../pages/components/winningRateChart';
import Card from '../pages/components/card';
import styles from '../styles/profile.module.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.experienceData = [
      {
        name: 'Round #123', date: '2020.09.20', uv: 4000,
      },
      {
        name: 'Round #124', date: '2020.09.21', uv: 3000,
      },
      {
        name: 'Round #125', date: '2020.09.22', uv: 2000,
      },
      {
        name: 'Round #126', date: '2020.09.23', uv: 2780,
      },
      {
        name: 'Round #127', date: '2020.09.24', uv: 1890,
      },
      {
        name: 'Round #128', date: '2020.09.25', uv: 2390,
      },
      {
        name: 'Round #129', date: '2020.09.26', uv: 3490, 
      },
      {
        name: 'Round #130', date: '2020.19.10', uv: 3490,
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
        gamename: '총쏘기 게임 2', rate:35,
      },
      {
        gamename: '풍선 터뜨리기', rate: 15,
      },
      {
        gamename: '길찾기', rate: 35,
      },
    ];

    this.user = {
      username: "test user",
      ranking: 30,
      belong: "KMU university",
      numOfPlayingGame: 20
    }
  }

  render() {
    return (
      <BaseLayout>
        <Row gutter = {8} style={{paddingTop: 20 }}>
          <Col xs = {24} md = {10} lg = {6}>
            <Card minHeight = {200} maxHeight = {500}>
              <div className = {styles.avatar}/>
              <h2 style = {{textAlign:"center"}}>
                {this.user.username}
              </h2>
              <h3 style = {{textAlign:"center"}}>
                행킹: {this.user.ranking} 위
              </h3>
              <h3 style = {{textAlign:"center"}}>
                소속: {this.user.belong}
              </h3>
              <h3 style = {{textAlign:"center"}}>
                참가한 게임 수: {this.user.numOfPlayingGame}
              </h3>
            </Card>
          </Col>
          <Col xs = {24} md = {14} lg = {18}>
            <Card minHeight = {200} maxHeight = {500}>
              <h2>
                Chart
              </h2> 
              <ExperienceChart data = {this.experienceData} height = {300}/>
            </Card>
          </Col>
          <Col xs = {24} md = {12} lg = {12}>
            <Card>
              <WinningRateChart data = {this.winningRateData} dataKey = {"rate"} height = {300} minHeight = {300} fillColor = {"#7095FF"}/>
            </Card>
          </Col>
          <Col xs = {24} md = {12} lg = {12}>
            <Card>
              <WinningRateChart data = {this.losingRateData} dataKey = {"rate"} height = {300} minHeight = {300} fillColor = {"#FF7070"}/>
            </Card>
          </Col>
        </Row>
      </BaseLayout>
    )
  }
}

export default Profile;