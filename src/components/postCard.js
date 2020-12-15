import React, { Component } from 'react'
import { CommentOutlined } from '@ant-design/icons';
import CardLayout from '../layouts/cardLayout';
import {Comment} from './comment';
import { connect } from 'react-redux';
import CommentInput from '../forms/commentInput';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.comments = this.props.comments || [];
  }

  makeCommentList(comments, isReComment) {
    return comments.map(
      comment => (
        <div className = "padding-5" key = {comment.id}> 
          <Comment comment = {comment} isReComment = {isReComment}/>
          
          <div className = "reCommentBox" style = {{paddingLeft: 20}}>
            {
              comment.recomments ? this.makeCommentList(comment.recomments, true) : null
            }
          </div>
          {
            isReComment ? null : <hr/>
          }
        </div>
      )
    );
  }

  render() {
    const {user, loggedIn, data} = this.props;
    const commentList = this.makeCommentList(this.comments, false);

    return (
      <CardLayout>
        <div className = "padding-20">
          <h1
            className = "font-light-red font-25 line-height-25">
            {data.title}
          </h1>
          <h3
            className = "font-light-dark-blue font-15 line-height-20">
            by {data.user.username}, {data.created_at}
          </h3>
          <p
            className = "font-white font-content" style={{whiteSpace: 'pre-line'}}>
            {data.content}
          </p>

          <CardLayout backgroundColor={"#2C3450"} boxShadow={"0px 3px 2px #1B233A"}>
            <h2
              className = "font-20">
              <CommentOutlined style={{ color: '#78E1D6' }} /> &nbsp;
              Comment
            </h2>
            <hr/>
            <div className = "padding-10">
              {commentList}
            </div>
            {loggedIn?<CommentInput post_id = {data.id} user = {user}/>:null}

          </CardLayout>
        </div>
      </CardLayout>
    )
  }
}



function mapState(state) {
  const { authentication } = state;
  const { loggedIn, user } = authentication;
  return { loggedIn, user };
}

const actionCreators = {
}

const connectedPostCard = connect(mapState, actionCreators)(PostCard);
export { connectedPostCard as PostCard };