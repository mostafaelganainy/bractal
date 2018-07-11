import React from 'react';

import ModalRoute from '~/modules/core/components/Modal/ModalRoute';

import Login from './panels/login';
import RecoverPassword from './panels/RecoverPassword';

export default () => (
  <React.Fragment>
    <ModalRoute path="/accountManagement/recoverPassword" component={RecoverPassword} />
    <ModalRoute path="/accountManagement/login" component={Login} />
  </React.Fragment>
);
