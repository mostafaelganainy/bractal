
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';

import LoginContainer from '../../../../accountManagement/containers/LoginContainer';
import userAuthurization from '../../../../accountManagement/utilities/AccountManagement';

export default class NavUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
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
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });
  render() {
    const Token = userAuthurization();
    let userImage = '';

    if (Token !== false) {
      userImage = <Image src="images/Header/userloggedIn.png" />;
    } else {
      userImage = (
        <IconOnlyButton primary iconName="icon-user" size={28} onClick={this.show('blurring')} />
      );
    }
    return (
      <div className="user-profile">
        {userImage}
        <LoginContainer open={this.state.open} dimmer={this.state.dimmer} close={this.close} />
      </div>
    );
  }
}
