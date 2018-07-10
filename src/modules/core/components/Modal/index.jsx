import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { RightAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';


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
    this.modalContainer = React.createRef();
    this.state = {
      modalIsOpen: true,
    };
  }

  show = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = (history) => {
    // eslint-disable-next-line
    this.setState({ modalIsOpen: false });
    history.goBack();
  }

  clickedOutsite = (e, history) => {
    // eslint-disable-next-line
    const domNode = ReactDOM.findDOMNode(this.modalContainer.current);
    if (domNode === e.target) {
      this.setState({ modalIsOpen: false });
      history.goBack();
    }
  }
  // onRequestClose={() => this.closeModal(history)}
  render = () => {
    const { history } = this.props;

    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
        >
          <ModalContainer
            ref={this.modalContainer}
            onClick={e => this.clickedOutsite(e, history)}
          >
            <RightAlignedColumn>
              <Icon className="close icon closePopup" onClick={() => this.closeModal(history)} />
              {this.props.children}
            </RightAlignedColumn>
          </ModalContainer>
        </ReactModal>
      </div>
    );
  }
}


Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  history: PropTypes.string.isRequired,
}.isRequired;


export default withRouter(Modal);