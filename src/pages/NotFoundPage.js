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
      
        <div
          className = "dark-bg width-100 height-px-600">
          <Row className = "height-100">
            <Col lg = {{span: 2}} md = {{span: 1}} sm = {{span: 1}} xs ={{span : 1}}/>
            <Col lg = {{span: 20}}  md = {{span: 22}} sm = {{span: 22}} xs ={{span : 22}}
              style = {{padding: "200px 0 0 0"}} 
              className = "height-100 text-align-center"
            >
              <h2
                className = "font-30 line-height-30">
                Oopes, PAGE NOT FOUND
              </h2>
              <h1 
                className = "font-60 line-height-60">
                404
              </h1>
              <h3
                className = "font-20 line-height-20 font-light-dark-blue">
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