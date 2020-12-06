import React, { Component } from 'react';
import {Row, Col} from 'antd';

export default class Banner extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:"#1F263B", height:"300px", width: "100%"}}>
        <Row className = "height-100">
          <Col lg = {{span: 2}} md = {{span: 1}} sm = {{span: 1}} xs ={{span : 1}}/>
          <Col lg = {{span: 20}}  md = {{span: 22}} sm = {{span: 22}} xs ={{span : 22}} 
            style = {{padding: "75px 0 0 0"}} 
            lassName = "height-100">
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
          <Col lg = {{span: 2}} md = {{span: 1}} sm = {{span: 1}} xs ={{span : 1}}/>
        </Row>
      </div>
    )
  }
}