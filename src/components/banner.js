import React, { Component } from 'react';
import {Row, Col} from 'antd';

export default class Banner extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:"#1F263B", height:"380px", width: "100%"}}>
        <Row style = {{padding: "125px 0 0 0"}}>
          <Col lg = {{span: 2}}/>
          <Col lg = {{span: 8}}>
            <h2 style={{fontSize:30,lineHeight:"30px"}}>
              {this.props.subtitle}
            </h2>
            <h1 style={{fontSize:60,lineHeight:"60px"}}>
              {this.props.title}
            </h1>
            <h3 style={{fontSize:20, color:"#465580" ,lineHeight:"20px"}}>
              {this.props.message}
            </h3>
          </Col>
          <Col lg = {{span: 2}}/>
          <Col lg = {{span: 10}}>
            Geo
          </Col>
          <Col lg = {{span: 2}}/>
        </Row>
      </div>
    )
  }
}