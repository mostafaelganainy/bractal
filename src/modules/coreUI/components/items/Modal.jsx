import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: '0px',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    background-color: white;
  }
`;

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true,
    };
  }

  show = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render = () => (
    <div>
      <ReactModal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <ModalContainer>
          {this.props.children}
        </ModalContainer>
      </ReactModal>
    </div>
  )
}


Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}.isRequired;


export default Modal;
