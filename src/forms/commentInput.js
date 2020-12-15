import { Button, Input } from 'antd';
import React, { Component } from 'react'
import { BASE_API_URL } from '../_constants';
import { authHeader, handleTokenResponse } from '../_helpers';

const { TextArea } = Input;

class CommentInput extends Component {
  // comment_id
  state = {
    content: "",
    loading: false,
  }

  constructor(props) {
    super(props);
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelChange(e) {
    this.setState({
      ...this.state,
      content: e.target.value,
    })
  }

  handleSubmit() {
    const { content } = this.state;
    const { post_id } = this.props;
    this.setState({
      ...this.state,
      loading: true,
    })

    this.patchReComment(post_id, content);
  }

  patchReComment = async (id, content) => {

    var requestOptions = {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify({
        "content": content
      })
    }
    fetch(`${BASE_API_URL}/posts/${id}/add_comment/`, requestOptions)
      .then(res => handleTokenResponse(res, `${BASE_API_URL}/posts/${id}/add_comment/`, requestOptions))
      .then(
        function(res) {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      )
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
    const { content, loading } = this.state;
    const { user } = this.props;
    return (
      <div className="padding-20 dark-bg">
        <h3 className="font-white">
          {user.user.username}
        </h3>
        <form onSubmit = {this.handleSubmit}>
          <TextArea
            className="width-90 margin-10 font-content"
            value={content} 
            onChange={this.handelChange}
          />
          <Button
            disabled={loading}
            style={{ width: "fit-content" }}
            onClick={this.handleSubmit}
          >
            작성
          </Button>

        </form>
      </div>
    )
  }
}

export default CommentInput;