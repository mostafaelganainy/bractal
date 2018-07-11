
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import ModalLink from '~/modules/core/components/Modal/ModalLink';

import userAuthurization from '../../../../accountManagement/utilities/AccountManagement';


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
    // eslint-disable-next-line
    if (Token !== false) {
      userImage = <Image src="/images/Header/userloggedIn.png" />;
    } else {
      userImage = (
        <ModalLink to="/accountManagement/VerficationCode">
          <IconOnlyButton primary iconName="icon-user" size={28} />
        </ModalLink>
      );
    }
    return (
      <div className="user-profile">
        {userImage}
      </div>
    );
  }
}

NavUserProfile.propTypes = PropTypes.shape({
  location: PropTypes.string.isRequired,
}).isRequired;

export default NavUserProfile;

