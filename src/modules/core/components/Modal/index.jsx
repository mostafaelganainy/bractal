import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Icon from '~/modules/coreUI/components/basic/Icon';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { closeCurrentModal } from '~/modules/core/utils/modalHelpers';
import { cssMediaMin, cssMediaMax, mediaQueryMin, mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import Image from '~/modules/coreUI/components/basic/Image';
import { cssMediaMax, mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
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

const TabletCloseIcon = styled(Image)`
  max-width: 17px;
  max-height: 17px;
  
  position: absolute;
  top: ${props => props.theme.paddings.xxLarge}px;
  right: ${props => props.theme.paddings.xxLarge}px;
  z-index: 3;
`;
const CloseIcon = styled(Icon)`
  &&& {
    align-self: flex-end;
    margin-bottom: 5px;

    font-size: 25px !important;
    color: white;
    cursor: pointer;
    z-index: 3;
  }
font-size: 17px !important;
color: white;
cursor: pointer;
z-index: 1;
@media (max-width: 1024px) {
      color: black;
  }
`;


const ModalContainer = styled.div`  
  width: 100%;
  height: 100%;
  
  ${cssMediaMin.desktop`
    
  `}  
  ${cssMediaMax.tablet`
    position: absolute;
    overflow: auto;
  `}  
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0,0,0,0.7);
  
  ${cssMediaMax.tablet`
    background-color: white;
  `}
`;

const ModalContent = styled(CenterAlignedColumn)`
  ${cssMediaMax.tablet`
    align-self: flex-start;
    padding-top: ${props => props.theme.paddings.xxLarge}px;
  `}
`;

class Modal extends React.Component {
  closeModal = (location, history) => {
    // eslint-disable-next-line
    closeCurrentModal(location, history);
  }

  clickedOutsite = (e, location, history, isDesktop) => {
    if (!isDesktop) {
      return;
    }
    // eslint-disable-next-line
    const domNode = ReactDOM.findDOMNode(this.modalContainer);
    if (domNode === e.target) {
      this.closeModal(location, history);
    }
  }
  renderContent = () => {
    const { location, history } = this.props;

    return (
      <ModalContent >
        <Media query={mediaQueryMax('tablet')}>
          {matches => (
            matches ? (
              <TabletCloseIcon src="/images/AccountManagement/close-copy.png" onClick={() => this.closeModal(location, history)} />
            ) : (
              <CloseIcon className="close icon closePopup" onClick={() => this.closeModal(location, history)} />
            )
          )}
        </Media>
        {this.props.children}
      </ModalContent>
    );
  }

  render = () => {
    const { location, history } = this.props;

    return (
      <div>
        <ReactModal
          isOpen
          style={customStyles}
        >
          <Media query={mediaQueryMin('desktop')}>
            {matches => (
              <ModalContainer
                ref={(ref) => { this.modalContainer = ref; }}
                onClick={e => this.clickedOutsite(e, location, history, matches)}
              >
                {this.renderContent()}
              </ModalContainer>
            )}
          </Media>
          <ModalContainer
            ref={(ref) => { this.modalContainer = ref; }}
            onClick={e => this.clickedOutsite(e, location, history)}
          >
            <RightAlignedColumn>
              <Media query={mediaQueryMax('tablet')}>
                {matches => (
                  matches ? (
                    <CloseIcon className="close icon closePopup" onClick={() => this.closeModal(location, history)} />
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
