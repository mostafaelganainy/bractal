
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Image, Dropdown } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import ModalLink from '~/modules/core/components/Modal/ModalLink';

import userAuthurization from '../../../../accountManagement/utilities/AccountManagement';


const DropdownContentItems = styled(Dropdown)`
  &.dropdown>.menu {
    left: auto;
    right: -145px;
    width:317px;
    padding: 0 25px;
    >.item{
      padding: 12px 0 !important;
      border-bottom: 1px solid rgba(235, 235, 235,0.6);
      color:rgba(0, 0, 0, 0.5);
      &:hover{
        background: transparent
      }
      &:last-child{
        border-bottom: none;
      }
    }
  }
`;
class NavUserProfile extends Component {
  componentWillMount() {
    const expiryDate = parseFloat(localStorage.getItem('expiryDate'));
    if (
      Date.now() > expiryDate * 1000 ||
      expiryDate === 'undefined' ||
      expiryDate === undefined
    ) {
      localStorage.removeItem('AuthToken');
      localStorage.removeItem('expiryDate');
      localStorage.removeItem('tokenType');
      localStorage.removeItem('uid');
      localStorage.removeItem('client');
    }
  }

  // show = dimmer => () => this.setState({ dimmer, open: true });
  // close = () => this.setState({ open: false });
  render() {
    const Token = userAuthurization();
    let userImage = '';
    let DropdownContent = '';
    // eslint-disable-next-line
    if (Token !== false) {
      userImage = <Image src="/images/Header/userloggedIn.png" />;
    } else {
      userImage = (
        <IconOnlyButton primary iconName="icon-user" size={28} />
      );
      DropdownContent = (
        <DropdownContentItems
          trigger={userImage}
          pointing
          className="set-currency"
          icon={null}
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <ModalLink to="/accountManagement/login">
                Log in / Sign up
              </ModalLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Shopping cart
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Recent viewed
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Wishlist
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Following
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Settings
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="icon-heart" /> Customer service
            </Dropdown.Item>
          </Dropdown.Menu>
        </DropdownContentItems>
      );
    }
    return (
      <div className="user-profile">
        {DropdownContent}
      </div>
    );
  }
}

NavUserProfile.propTypes = PropTypes.shape({
  location: PropTypes.string.isRequired,
}).isRequired;

export default NavUserProfile;

