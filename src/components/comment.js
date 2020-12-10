/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import ReCommentInput from '../forms/reCommentInput';
import store from '../_helpers/store';

import { connect } from 'react-redux';

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
    
    const {loggedIn, user} = this.props;
    return (
      <div>
        <span 
          className = "font-15"
          style = {{color : this.usernameColor}}>
          {this.props.comment.user.username}
        </span>
        
        <span 
          className = "font-light-dark-blue font-10"
          style = {{paddingLeft: 5}}>
          {this.props.comment.updated_at}
        </span>

        <p
          className = "font-white font-15 font-content">
          {this.props.comment.content}
          {
            loggedIn?
            <a 
              className = "font-light-blue"
              style ={{paddingLeft: 5}} onClick = {this.onhandleReComment}>
              &gt; Reply
            </a>:""
          }
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


function mapState(state) {
  const { authentication } = state;
  const { loggedIn, user } = authentication;
  return { loggedIn, user };
}

const actionCreators = {
}

const connectedComment = connect(mapState, actionCreators)(Comment);
export { connectedComment as Comment };