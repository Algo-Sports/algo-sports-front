import { Button, Input } from 'antd';
import React, { Component } from 'react'
import { BASE_API_URL } from '../_constants';
import { authHeader, handleTokenResponse } from '../_helpers';

class ReCommentInput extends Component {
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
    const { comment_id } = this.props;
    this.setState({
      ...this.state,
      loading: true,
    })

    this.patchReComment(comment_id, content);
  }

  patchReComment = async (id, content) => {

    var requestOptions = {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify({
        "content": content
      })
    }
    var ret = fetch(`${BASE_API_URL}/comments/${id}/add_recomment/`, requestOptions)
      .then(res => handleTokenResponse(res, `${BASE_API_URL}/comments/${id}/add_recomment/`, requestOptions))
      .catch(function (e) {
        console.log(e);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload(); 
  }

  render() {
    const { content, loading } = this.state;
    const { user } = this.props;
    return (
      <div className="padding-5">
        <h4 className="font-white">
          {user.user.username}
        </h4>
        <form>
          <Input
            className="width-80 margin-10 font-content"
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

export default ReCommentInput;