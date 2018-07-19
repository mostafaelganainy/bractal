/* eslint-disable react/prop-types */
import React from 'react';
import { Label } from '~/modules/coreUI/components/basic/Labels';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';

const logout = (e, invalidateUser) => {
  e.stopPropagation();
  invalidateUser();
};

const DummyUserName = props => (
  <React.Fragment>
    <Label> USER : <b>{(props.userInfo && props.userInfo.firstName) || 'Not Loggedin'}</b></Label>
    <BasicButton
      disabled={!props.authenticated}
      onClick={e => logout(e, props.invalidateUser)}
    >
      Logout
    </BasicButton>
  </React.Fragment>
);

export default withUserInfo(DummyUserName);
