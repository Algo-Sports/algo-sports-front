import React, { Component } from 'react'

class GameListLayout extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.subTitle = this.props.subTitle;
  }

  render() {
    return (
      <div>
        <div
          className="light-dark-blue-bg "
          style={{ height: 200, paddingTop: "50px" }}>
          <h1
            className = "font-30 line-height-30 text-align-center">
            {this.props.title}
          </h1>
          <h2
            className = "font-20 line-height-20 text-align-center">
            {this.props.subTitle}
          </h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default GameListLayout;
