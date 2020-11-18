import { CommentOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import CardLayout from '../pages/layouts/cardLayout';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.comments = this.props.comments || [];
  }

  render() {
    const commentList = this.comments.map(
      item => (<p key = {item.comment_id}> {item.content} </p>)
    );

    return (
      <CardLayout>
        <div style={{ padding: 20 }}>
          <h1 style={{ color: "#FF7596", fontSize: 25, lineHeight: "25px" }}>
            {this.data.title}
          </h1>
          <h3 style={{ color: "#465580", fontSize: 15, lineHeight: "20px" }}>
            by {this.data.username}, {this.data.created_at}
          </h3>
          <p style={{ color: "#FFFFFF", }}>
            {this.data.content}
          </p>

          <CardLayout backgroundColor={"#2C3450"} boxShadow={"0px 3px 2px #1B233A"}>
            <h2 style={{ fontSize: 20, }}>
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