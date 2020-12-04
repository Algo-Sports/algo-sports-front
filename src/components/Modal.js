import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "height-100" style = {{margin: "0 auto 0 auto", padding: "2% 0 2% 0"}}>
        {this.props.children}
      </div>
    )
  }
}

function mapState(state) {
  const { show, element } = state.modal;
  return { show, element };
}

const actionCreators = {
};

const connectedModal = connect(mapState, actionCreators)(Modal);
export { connectedModal as Modal };