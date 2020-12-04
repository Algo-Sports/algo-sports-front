import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modalActions } from '../_actions/modal.action';
import {Modal} from './Modal';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(249, 249, 249, 0.3);
  z-index: 100;
`;

class ModalWrapper extends Component {

  PreventModalOff = (e) => {
    e.stopPropagation();
  }
  
  render() {
    const { show, element, dropModal } = this.props;
    return (
      <div>
        {show && <Container onMouseDown={dropModal}>
          <Modal PreventModalOff={this.PreventModalOff} ModalOff={dropModal}>
            {element}
          </Modal>
        </Container>}
      </div>
    )
  }
}

function mapState(state) {
  const { show, element } = state.modal;
  return { show, element };
}

const actionCreators = {
  dropModal: modalActions.dropModal,
};

const connectedModalWrapper = connect(mapState, actionCreators)(ModalWrapper);
export { connectedModalWrapper as ModalWrapper };