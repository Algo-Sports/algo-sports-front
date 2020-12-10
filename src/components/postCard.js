import React, { Component } from 'react'
import { CommentOutlined } from '@ant-design/icons';
import CardLayout from '../layouts/cardLayout';
import {Comment} from './comment';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.comments = this.props.comments || [];
  }

  render() {
    const commentList = this.comments.map(
      comment => (
        <div key = {comment.id}> 
          <Comment comment = {comment}/>

          <div className = "reCommentBox" style = {{paddingLeft: 20}}>
            {comment.recomments.map(
              reCommentItem => (
                <Comment comment = {reCommentItem} />
              )
            )}
          </div>
        </div>
      )
    );

    return (
      <CardLayout>
        <div className = "padding-20">
          <h1
            className = "font-light-red font-25 line-height-25">
            {this.data.title}
          </h1>
          <h3
            className = "font-light-dark-blue font-15 line-height-20">
            by {this.data.user.username}, {this.data.created_at}
          </h3>
          <p
            className = "font-white font-content">
            {this.data.content}
          </p>

          <CardLayout backgroundColor={"#2C3450"} boxShadow={"0px 3px 2px #1B233A"}>
            <h2
              className = "font-20">
              <CommentOutlined style={{ color: '#78E1D6' }} /> &nbsp;
              Comment
            </h2>
            {commentList}
            <hr/>

          </CardLayout>
        </div>
      </CardLayout>
    )
  }
}


export default PostCard;