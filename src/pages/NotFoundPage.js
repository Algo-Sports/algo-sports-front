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
        <Banner title = "404" subtitle = "Oopes, PAGE NOT FOUND" message = "we could find page you're looking for"/>
        <div className = "height-90">
          <Link to = "/">
            &gt; 메인화면으로 돌아가기
          </Link>
        </div>
      </BaseLayout>
    )
  }
}

export default NotFoundPage;