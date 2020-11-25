import React, { Component } from 'react'

class CardLayout extends Component {
  constructor(props) {
    super(props);
    this.backgroundColor = this.props.backgroundColor || "#1F263B";
    if(this.props.backgroundColor == false) {
      this.boxShadow = "";
    }
    else {
      this.boxShadow = this.props.boxShadow ||  "0px 3px 10px #000000";
    }
  }

  render() {
    return (
      <div style = {{padding: 20}}>
        <div style={{backgroundColor: this.backgroundColor, boxShadow: this.boxShadow, padding: 10}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CardLayout;