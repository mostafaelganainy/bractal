import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { RightAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { closeCurrentModal } from '~/modules/core/utils/modalHelpers';
import { cssMediaMax, mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import Image from '~/modules/coreUI/components/basic/Image';
import Media from 'react-media';

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

const CloseIconImg = styled(Image)`
    max-width: 15px;
    @media (max-width: 1024px) {
      margin-right: 15px;
  }
`;
const CloseIcon = styled(Icon)`
font-size: 17px !important;
color: white;
cursor: pointer;
z-index: 1;
`;


const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  ${cssMediaMax.tablet`
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
              <Media query={mediaQueryMax('tablet')}>
                {matches => (
                  matches ? (
                    <CloseIconImg src="/images/AccountManagement/close-copy.png" onClick={() => this.closeModal(location, history)} />

        ) : (
          <CloseIcon className="close icon closePopup" onClick={() => this.closeModal(location, history)} />
        )
      )}
              </Media>
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
