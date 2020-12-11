import React, { Component } from 'react';
import BaseLayout from '../layouts/baseLayout';
import Banner from '../components/banner';
import {PostCard} from '../components/postCard';
import ListLoader from '../components/listLoader';
import {BASE_API_URL} from '../_constants/api.constants';

// import {commentData} from '../dev/data'; // postData
import { Col, Row } from 'antd';
import axios from 'axios';

class PostList extends Component {
  state = {
    postDataLoading: true,
    recentPostDataLoading: true,
    postData: [],
    commentData : [],
  }

  constructor(props) {
    super(props);
    this.loadPostdata = this.loadPostdata.bind(this);
    this.loadCommentData = this.loadCommentData.bind(this);
  }
  
  componentDidMount() {
    this.loadPostdata();
    this.loadCommentData();
  }

  loadPostdata = async () => {
    try{
      const response = await axios({
        method: 'get',
        url: BASE_API_URL + "/posts/",
      })
      this.setState({
        postData: response.data.results
      })
    }
    catch {
      this.setState({
        postData: []
      })
    }
  }

  loadCommentData = async () => {
    try{
      const response = await axios({
        method: 'get',
        url: BASE_API_URL + "/comments/",
      })
      this.setState({
        commentData: response.data.results,
        postDataLoading: false,
      })
    }
    catch{
      this.setState({
        commentData: []
      })
    }
  }



  render() {
    const data = this.state.postData;
    const comments = this.state.commentData;
    const commentMap = {};
    
    for(var i = 0; i < comments.length; i++) {
      var item = comments[i];
      if(commentMap[item.post]) {
        commentMap[item.post].push(comments[i]);
      }
      else {
        commentMap[item.post] = [comments[i]];
      }
    }

    const postList = data.map(
      item => (<PostCard  key = {item.id} data = {item} comments = {commentMap[item.id]}/>)
    )

    return (
      <BaseLayout>
        <Banner title="Blog" subtitle="Hello, World!" message="Read, Write, Share" />
        
          <Row className ="min-height-30" style = {{marginTop : 20}}>
            <Col lg = {{span: 1}}/>
            <Col lg = {{span: 15}}>
             {this.state.postDataLoading ? <ListLoader/> : postList}
            </Col>
            <Col lg = {{span: 1}}/>
            <Col lg = {{span: 6}}>
              {this.state.recentPostDataLoading ? <ListLoader/> : <div></div>}

            </Col>
            <Col lg = {{span: 1}}/>
          </Row>
      </BaseLayout>
    )
  }
}

export default PostList;