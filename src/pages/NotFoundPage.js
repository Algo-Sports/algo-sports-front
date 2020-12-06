import React, { Component } from 'react';
import {Row, Col} from 'antd';
import {NavBar} from '../components/navBar';
import Banner from '../components/banner';
import BaseLayout from '../layouts/baseLayout.js'
import { Link } from 'react-router-dom';
class NotFoundPage extends Component {
  render() {
    return (
      <BaseLayout>
      
        <div style={{backgroundColor:"#1F263B", height:"600px", width: "100%"}}>
          <Row className = "height-100">
            <Col lg = {{span: 2}} md = {{span: 1}} sm = {{span: 1}} xs ={{span : 1}}/>
            <Col lg = {{span: 20}}  md = {{span: 22}} sm = {{span: 22}} xs ={{span : 22}} 
              style = {{padding: "200px 0 0 0", textAlign: "center"}} 
              lassName = "height-100"
            >
              <h2 style={{fontSize:30,lineHeight:"30px"}}>
                Oopes, PAGE NOT FOUND
              </h2>
              <h1 style={{fontSize:60,lineHeight:"60px"}}>
                404
              </h1>
              <h3 style={{fontSize:20, color:"#465580" ,lineHeight:"20px"}}>
                we could find page you're looking for
                <br/>
                <br/>
                <Link to = "/">
                  &gt; 메인화면으로 돌아가기
                </Link>
              </h3>
            </Col>
            <Col lg = {{span: 2}} md = {{span: 1}} sm = {{span: 1}} xs ={{span : 1}}/>
          </Row>
        </div>
      </BaseLayout>
    )
  }
}

export default NotFoundPage;