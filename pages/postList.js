import React, { Component } from 'react';
import BaseLayout from './layouts/baseLayout';
import Banner from '../components/banner';
import PostCard from '../components/postCard';

import {postData, commentData} from '../dev/data';
import { Col, Row } from 'antd';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.commentMap = {};
  }
  render() {
    const data = postData;
    const comments = commentData;
    
    for(var i = 0; i < comments.length; i++) {
      var item = comments[i];
      
      if(item.post_id in this.commentMap) {
        this.commentMap[item.post_id].push(item);
      }
      else {
        this.commentMap[item.post_id] = [item];
      }
    }

    const postList = data.map(
      item => (<PostCard  key = {item.id} data = {item} comments = {this.commentMap[item.id]}/>)
    )
    
    

    return (
      <BaseLayout>
        <Banner title="Blog" subtitle="Hello, World!" message="Read, Write, Share" />
        <Row  style = {{marginTop : 20}}>
          <Col lg = {{span: 1}}/>
          <Col lg = {{span: 15}}>
            {postList}
          </Col>
          <Col lg = {{span: 1}}/>
          <Col lg = {{span: 6}}>
            <div>

            </div>
          </Col>
          <Col lg = {{span: 1}}/>
        </Row>
      </BaseLayout>
    )
  }
}

export default PostList;