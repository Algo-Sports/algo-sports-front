import React, { Component } from 'react';
import BaseLayout from './layouts/baseLayout'
import {Row, Col} from 'antd'
import ExperienceChart from '../pages/components/experienceChart';
import WinningRateChart from '../pages/components/winningRateChart';
import Card from '../pages/components/card';

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
        gamename: '총쏘기 게임', A: 56.5,
      },
      {
        gamename: '땅따먹기 게임 1', A: 98,
      },
      {
        gamename: '땅따먹기 게임 2', A: 86,
      },
      {
        gamename: '총쏘기 게임 2', A: 99,
      },
      {
        gamename: '풍선 터뜨리기', A: 85,
      },
      {
        gamename: '길찾기', A: 65,
      },
    ];

    this.losingRateData = [
      {
        gamename: '총쏘기 게임', A: 56.5,
      },
      {
        gamename: '땅따먹기 게임 1', A: 98,
      },
      {
        gamename: '땅따먹기 게임 2', A: 86,
      },
      {
        gamename: '총쏘기 게임 2', A: 99,
      },
      {
        gamename: '풍선 터뜨리기', A: 85,
      },
      {
        gamename: '길찾기', A: 65,
      },
    ];
  }

  render() {
    return (
      <BaseLayout>
        <Row gutter = {8} style={{paddingTop: 20 }}>
          <Col xs = {24} md = {24} lg = {8}>
            <Card>
              <div style = {{width : 150, height: 150, backgroundColor:"white", margin:"auto auto auto auto", borderRadius : 75}}>
              </div>
              <h2 style = {{textAlign:"center"}}>
                username
              </h2>
            </Card>
          </Col>
          <Col xs = {24} md = {24} lg = {16}>
            <Row>
              <Col xs = {24} md = {24} lg = {24}>
                <Card>
                  <h2>
                    Chart
                  </h2>
                  <ExperienceChart data = {this.experienceData} height = {300}/>
                </Card>
              </Col>
              <Col xs = {24} md = {12} lg = {12}>
                <Card>
                  <WinningRateChart data = {this.winningRateData} height = {300} minHeight = {300}/>
                </Card>
              </Col>
              <Col xs = {24} md = {12} lg = {12}>
                <Card>
                  <WinningRateChart data = {this.losingRateData} height = {300} minHeight = {300}/>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </BaseLayout>
    )
  }
}

export default Profile;