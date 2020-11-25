import React, { Component } from 'react';
import BaseLayout from '../layouts/baseLayout';
import Banner from '../components/banner';
import PostCard from '../components/postCard';
import {BASE_API_URL} from '../constants/api';

// import {commentData} from '../dev/data'; // postData
import { Col, Row } from 'antd';
import axios from 'axios';

class PostList extends Component {
  state = {
    token: "c038fe1d07786596374d9769236e84c07f95d338",
    postData: [],
    commentData : [],
  }

  constructor(props) {
    super(props);

    this.commentMap = {};
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
        url: BASE_API_URL + "posts/",
        headers: {
          Authorization: "Token " + this.state.token
        }
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
        url: BASE_API_URL + "comments/",
        headers: {
          Authorization: "Token " + this.state.token
        }
      })
      console.log(response);
      this.setState({
        commentData: response.data.results
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
    
    for(var i = 0; i < comments.length; i++) {
      var item = comments[i];
      
      if(item.post in this.commentMap) {
        this.commentMap[item.post].push(item);
      }
      else {
        this.commentMap[item.post] = [item];
      }
    }

    console.log(this.commentMap);

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