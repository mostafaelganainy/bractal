
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';

import userAuthurization from '../../../../accountManagement/utilities/AccountManagement';

import RecoverPassword from '../../../../accountManagement/containers/forgetPassword/RecoverPassword';

export default class NavUserProfile extends Component {
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
      userImage = <Image src="images/Header/userloggedIn.png" />;
    } else {
      userImage = (
        <IconOnlyButton primary iconName="icon-user" size={28} onClick={() => this.popup.show()} />
      );
    }
    return (
      <div className="user-profile">
        {userImage}

        <RecoverPassword
          ref={(ref) => { this.popup = ref; }}
        />
      </div>
    );
  }
}

