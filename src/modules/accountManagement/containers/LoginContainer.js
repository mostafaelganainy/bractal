// eslint-disable-next-line
/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Trans, translate } from 'react-i18next';

import Login from './Login';
import CreateAccount from './CreateAccount';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginCont: true,
      isLoading: false,
      showCreateAccCont: true,
    };
  }
  handleRegSubmit = (RegistedUser, ShowServerRegErrors) => {
    this.ShowLoader();

    axios({
      url: 'http://ayk-test.badrit.com/api/signup',
      data: JSON.stringify({ spree_user: RegistedUser }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
      },
    })
      .then((resp) => {
        this.ShowLoader();
        localStorage.setItem('SavedEmail', resp.data.user.email);
        this.ShowVerify();
      })
      .catch((err) => {
        this.ShowLoader();
        ShowServerRegErrors(err.response.data.errors);
      });
  };
  toggleCreateAccountContent = () => {
    this.setState({ showCreateAccCont: true });
  };
  ShowVerify = () => {
    this.setState({ showCreateAccCont: false });
  };
  ShowLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };
  handleSubmit = (user, clearFields, setErrors) => {
    this.ShowLoader();
    axios({
      url: 'http://ayk-test.badrit.com/api/login',
      data: user,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
      },
    })
      .then((resp) => {
        this.ShowLoader();
        if (resp.data.data.verified) {
          localStorage.setItem('AuthToken', resp.headers['access-token']);
          localStorage.setItem('expiryDate', resp.headers.expiry);
          localStorage.setItem('tokenType', resp.headers['token-type']);
          localStorage.setItem('uid', resp.headers.uid);
          localStorage.setItem('client', resp.headers.client);
          this.props.close();
        } else {
          this.toggleLoginContent();
          this.ShowVerify();
        }
      })
      .catch((err) => {
        this.ShowLoader();
        setErrors(err);
      });
  };

  toggleLoginContent = () => {
    this.setState({ showLoginCont: !this.state.showLoginCont });
  };
  render() {
    let ALlContentLogin = '';
    const { close } = this.props;

    if (this.state.showLoginCont) {
      ALlContentLogin = (
        <Login
          toggleLoginContent={this.toggleLoginContent}
          handleSubmit={this.handleSubmit}
          isLoading={this.state.isLoading}
          toggleCreateAccountContent={this.toggleCreateAccountContent}
        />
      );
    } else {
      ALlContentLogin = (
        <div className="CreateVeriCont">
          <div className="CreateAccContainer">
            <CreateAccount
              BackLogin={this.toggleLoginContent}
              close={close}
              showCreateAccCont={this.state.showCreateAccCont}
              handleSignUp={this.handleRegSubmit}
              isLoading={this.state.isLoading}
            />
          </div>
          <p className="TextCenter FooterTxt">
            <Trans i18nKey="AlreadyHaveanaccount" />
            <label className="LoginLbl" onClick={this.toggleLoginContent}>
              <Trans i18nKey="Login" />
            </label>
          </p>
        </div>
      );
    }
    return (
      <div>
        {ALlContentLogin}
      </div>
    );
  }
}

LoginContainer.propTypes = PropTypes.shape({
  close: PropTypes.func.isRequired,
}).isRequired;

export default translate('accountManagement')(LoginContainer);
