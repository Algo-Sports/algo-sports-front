import React, { Component } from 'react';
import BaseLayout from './layouts/baseLayout'
import {Row, Col} from 'antd'
import ExperienceChart from '../pages/components/experienceChart';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: 'Round #123', date: '2020.09.20', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Round #124', date: '2020.09.21', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Round #125', date: '2020.09.22', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Round #126', date: '2020.09.23', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Round #127', date: '2020.09.24', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Round #128', date: '2020.09.25', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Round #129', date: '2020.09.26', uv: 3490, pv: 4300, amt: 2100,
      },
      {
        name: 'Round #130', date: '2020.19.10', uv: 3490, pv: 4300, amt: 2100,
      },
    ];
  }

  render() {
    return (
      <BaseLayout>
        <Row gutter = {8}>
          <Col xs = {24} md = {6} lg = {6}>
            <div style = {{width : "100px", height:"100px", backgroundColor:"white", margin:"auto auto auto auto", borderRadius : "50px" }}>
            </div>
            <h2 style = {{textAlign:"center"}}>
              username
            </h2>
          </Col>
          <Col xs = {24} md = {18} lg = {18}>
            <h2>
              Chart
            </h2>
            <ExperienceChart data = {this.data} height = {300}>
            </ExperienceChart>
            

          </Col>
        </Row>
      </BaseLayout>
    )
  }
}

export default Profile;