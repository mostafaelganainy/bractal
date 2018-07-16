/* eslint-disable react/sort-comp */
import React from 'react';

import PropTypes from 'prop-types';
import UserInfoContext from './UserInfoContext';

class UserInfoProvider extends React.Component {
  validateUserInfoObject = (userInfo) => {
    const requiredProperties = ['token', 'clientID', 'expiry', 'email', 'firstName', 'lastName', 'rememberMe'];
    return requiredProperties.every(property =>
      Object.prototype.hasOwnProperty.call(userInfo, property));
  };

  componentDidMount = () => {
    let userInfo = localStorage.getItem('userInfo');

    if (!userInfo || userInfo === 'null') {
      userInfo = sessionStorage.getItem('userInfo');
    }

    userInfo = JSON.parse(userInfo);

    if (!userInfo) {
      return;
    }

    const allValuesExist = this.validateUserInfoObject(userInfo);

    if (allValuesExist) {
      if (new Date(parseInt(userInfo.expiry, 10) * 1000) > new Date()) {
        this.updateUserInfo(userInfo);
      } else {
        this.invalidateUser();
      }
    }
  }
  updateUserInfo = (userInfo) => {
    this.invalidateUser();

    const allValuesExist = this.validateUserInfoObject(userInfo);

    if (!allValuesExist) {
      throw new Error('Error in calling updateUserInfo, missing info');
    }
    if (userInfo.rememberMe) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    this.persist();

    this.setState({
      userManagement: {
        ...this.state.userManagement,
        authenticated: true,
        userInfo,
      },
    });
  }
  invalidateUser = () => {
    localStorage.setItem('userInfo', null);

    this.persist();

    this.setState(this.initialState);
  }

  persist = () => {
    // Workaround to force the browser to persist !!!
    // https://stackoverflow.com/questions/13292744/why-isnt-localstorage-persisting-in-chrome
    localStorage.getItem('userInfo');
    sessionStorage.getItem('userInfo');
  }

  initialState = {
    userManagement: {
      updateUserInfo: this.updateUserInfo,
      invalidateUser: this.invalidateUser,
      authenticated: false,
      userInfo: null,
    },
  }

  state = Object.assign({}, this.initialState);

  render = () => (
    <UserInfoContext.Provider value={this.state.userManagement}>
      {this.props.children}
    </UserInfoContext.Provider>
  )
}

UserInfoProvider.propTypes = PropTypes.shape({
  children: PropTypes.shape({}),
}).isRequired;

export default UserInfoProvider;
