import React from 'react';

import ModalRoute from '~/modules/core/components/Modal/ModalRoute';

import Login from './panels/login/LoginContainer';
import RecoverPassword from './panels/RecoverPassword';
import CreateNewPassword from '../containers/forgetPassword/CreateNewPassword';
import EmailOrSms from '../containers/forgetPassword/EmailOrSms';
import VerficationCodeEmail from '../containers/forgetPassword/VerficationCodeEmail';
import VerficationCodeSMS from '../containers/forgetPassword/VerficationCodeSMS';
import VerifyAccountEmailOrSms from '../containers/panels/VerifyAccount/VerifyAccountEmailOrSms';
import VerifyByEmail from '../containers/panels/VerifyAccount/VerifyByEmail';
import VerifyBySMS from '../containers/panels/VerifyAccount/VerifyBySMS';

export default () => (
  <React.Fragment>
    <ModalRoute path="/accountManagement/recoverPassword" component={RecoverPassword} />
    <ModalRoute path="/accountManagement/login" component={Login} />
    <ModalRoute path="/accountManagement/CreateNewPassword" component={CreateNewPassword} />
    <ModalRoute path="/accountManagement/EmailOrSms" component={EmailOrSms} />
    <ModalRoute path="/accountManagement/VerficationCodeEmail" component={VerficationCodeEmail} />
    <ModalRoute path="/accountManagement/VerficationCodeSMS" component={VerficationCodeSMS} />
    <ModalRoute path="/accountManagement/VerifyAccountEmailOrSms" component={VerifyAccountEmailOrSms} />
    <ModalRoute path="/accountManagement/VerifyByEmail" component={VerifyByEmail} />
    <ModalRoute path="/accountManagement/VerifyBySMS" component={VerifyBySMS} />
  </React.Fragment>
);
