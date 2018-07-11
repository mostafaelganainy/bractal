import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { RightAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { closeCurrentModal } from '~/modules/core/utils/modalHelpers';
import { cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

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
    borderRadius: '0px',
    border: 'none',
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

  ${cssMediaMax.mobile`
    background-color: white;
  `}
`;

class Modal extends React.Component {
  closeModal = (location, history) => {
    // eslint-disable-next-line
    closeCurrentModal(location, history);
  }

  clickedOutsite = (e, location, history) => {
    // eslint-disable-next-line
    const domNode = ReactDOM.findDOMNode(this.modalContainer);
    if (domNode === e.target) {
      this.closeModal(location, history);
    }
  }

  render = () => {
    const { location, history } = this.props;

    return (
      <div>
        <ReactModal
          isOpen
          style={customStyles}
        >
          <ModalContainer
            ref={(ref) => { this.modalContainer = ref; }}
            onClick={e => this.clickedOutsite(e, location, history)}
          >
            <RightAlignedColumn>
              <Icon className="close icon closePopup" onClick={() => this.closeModal(location, history)} />
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
