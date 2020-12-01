/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import ReCommentInput from '../forms/reCommentInput';
import store from '../_helpers/store';


class Comment extends Component {

  state = {
    isWritingReCommnt : false,
    user : {},
  }
  
  constructor(props) {
    super(props);
    this.usernameColor = this.props.usernameColor ? this.props.usernameColor : "#E17878";
    this.onhandleReComment = this.onhandleReComment.bind(this);
  }

  listener = () => {
    const {user} = store.getState();
    this.setState({
      ...this.state,
      user: user,
    })
  };

  onhandleReComment() {
    this.setState({
      ...this.state,
      isWritingReCommnt : !this.state.isWritingReCommnt,
    })
  }

  render() {
    return (
      <div>
        <span style = {{color : this.usernameColor, fontSize: 15}}>
            {this.props.comment.user.username}
        </span>
        
        <span style = {{color: "#465580", fontSize: 10, paddingLeft: 5}}>
            {this.props.comment.updated_at}
        </span>

        <p style = {{color: "#FFFFFF", fontSize: 12}}>
          {this.props.comment.content}
          <a style ={{paddingLeft: 5, color: "#7095FF"}} onClick = {this.onhandleReComment}>
            &gt; Reply
          </a>
        </p>
        {
          this.state.isWritingReCommnt ? 
          <ReCommentInput user = {this.state.user}/> :
          null
        }
      </div>
    )
  }
}

export default Comment;