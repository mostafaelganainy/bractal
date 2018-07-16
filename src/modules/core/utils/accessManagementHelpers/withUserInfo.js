import React from 'react';
import UserInfoContext from './UserInfoContext';

export default function withUserInfo(WrappedComponent) {
  return function render(props) {
    return (
      <UserInfoContext.Consumer>
        {userManagement => (
          <WrappedComponent
            userInfo={userManagement.userInfo}
            authenticated={userManagement.authenticated}
            updateUserInfo={userManagement.updateUserInfo}
            invalidateUser={userManagement.invalidateUser}
            {...props}
          />
        )}
      </UserInfoContext.Consumer>
    );
  };
}
