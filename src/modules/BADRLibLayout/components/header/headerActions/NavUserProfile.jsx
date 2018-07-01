import React from 'react';

const NavUserProfile = () => (
  <React.Fragment />
);

export default NavUserProfile;

/*
import React, {Component} from 'react';
import {Image, Modal} from 'semantic-ui-react';
import LoginContainer from '../../../containers/AccountManagement/LoginContainer';
import {userAuthurization} from '../../../utilities/AccountManagement';

export default class NavUserProfile extends Component {
  state = {open: false};
  show = dimmer => () => this.setState ({dimmer, open: true});
  close = () => this.setState ({open: false});
  componentWillMount () {
    let expiryDate = parseFloat (localStorage.getItem ('expiryDate'));
    if (
      Date.now () > expiryDate * 1000 ||
      expiryDate === 'undefined' ||
      expiryDate === undefined
    ) {
      localStorage.removeItem ('AuthToken');
      localStorage.removeItem ('expiryDate');
      localStorage.removeItem ('tokenType');
      localStorage.removeItem ('uid');
      localStorage.removeItem ('client');
    }
  }
  render () {
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    };
    let Token = userAuthurization ();
    let userImage = '';

    if (Token !== false) {
      userImage = <Image src="images/Header/userloggedIn.png" />;
    } else {
      userImage = (
        <Image
          src="images/Header/user.png"
          srcSet="images/Header/user@2x.png 2x,
 images/Header/user@3x.png 3x"
          onClick={this.show ('blurring')}
        />
      );
    }
    return (
      <div className="user-profile">
        {userImage}
        <Modal
          dimmer={this.state.dimmer}
          open={this.state.open}
          style={inlineStyle.modal}
        >
          <Modal.Content>
            <Modal.Description>
              <i
                aria-hidden="true"
                className="close big icon closePopup"
                onClick={this.close}
              />
              <LoginContainer close={this.close} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
*/
