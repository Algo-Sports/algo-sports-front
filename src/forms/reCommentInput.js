import { Input } from 'antd';
import React, { Component } from 'react'

class ReCommentInput extends Component {
  render() {
    const {user} = this.props;
    return (
      <div className="padding-5">
        <span>
          {user.username}
        </span>
        <Input />
      </div>
    )
  }
}

export default ReCommentInput;