import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Modal from '~/modules/core/components/Modal/index';
import { cssMediaMin, cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

import Login from '~/modules/accountManagement/containers/panels/login/LoginContainer';
import LoginResult from '~/modules/accountManagement/containers/panels/login/LoginResult';
import SocialMedia from '~/modules/accountManagement/containers/panels/socialMedia/SocialMedia';

import Signup from '~/modules/accountManagement/containers/panels/signup/SignupPanel';
import RecoverPassword from '~/modules/accountManagement/containers/panels/RecoverPassword';
import CreateNewPassword from '~/modules/accountManagement/containers/forgetPassword/CreateNewPassword';
import EmailOrSms from '~/modules/accountManagement/containers/forgetPassword/EmailOrSms';
import VerficationCodeEmail from '~/modules/accountManagement/containers/forgetPassword/VerficationCodeEmail';
import VerficationCodeSMS from '~/modules/accountManagement/containers/forgetPassword/VerficationCodeSMS';
import VerifyAccountEmailOrSms from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyAccountEmailOrSms';
import VerifyByEmail from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyByEmail';
import VerifyBySMS from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyBySMS';
import ModalLoginFooter from '~/modules/accountManagement/components/footers/ModalLoginFooter';

const PanelsContainer = styled(Row)` 
  ${cssMediaMax.tablet`
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  `}
  ${cssMediaMin.desktop`
    padding: 40px;
  `}
  
  flex-grow: 1;
`;

const PanelsFooter = styled(Column)`
  justify-self: flex-end;
  ${cssMediaMax.tablet`
    flex-direction: column;
    align-items: center;
  `}

  flex-grow: 1;
`;

const backgroundImagePath = '/images/AccountManagement/panel_background/bg.png';

const ModalContent = styled(Column)`
  ${cssMediaMin.desktop`
    width: 920px;
    height: 600px;
  `}

  position: relative;
  align-items: stretch;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.named.white};

  border: 1px solid;
  border-radius: ${props => props.theme.borders.radius.normal}px;
  border-color: white; 

  ${cssMediaMin.desktop`
    background-image: url(${backgroundImagePath});
    background-repeat: no-repeat;
    background-position: right top;
  `}
`;

const AccountManagementModals = () => (
  <Modal>
    <ModalContent>
      <PanelsContainer>
        <ModalRoute path="/accountManagement/login" component={Login} />
        <ModalRoute path="/accountManagement/loginResult" component={LoginResult} />
        <ModalRoute path="/accountManagement/singup" component={Signup} />
        <ModalRoute path="/accountManagement/recoverPassword" component={RecoverPassword} />
        <ModalRoute path="/accountManagement/CreateNewPassword" component={CreateNewPassword} />
        <ModalRoute path="/accountManagement/EmailOrSms" component={EmailOrSms} />
        <ModalRoute path="/accountManagement/VerficationCodeEmail" component={VerficationCodeEmail} />
        <ModalRoute path="/accountManagement/VerficationCodeSMS" component={VerficationCodeSMS} />
        <ModalRoute path="/accountManagement/VerifyAccountEmailOrSms" component={VerifyAccountEmailOrSms} />
        <ModalRoute path="/accountManagement/VerifyByEmail" component={VerifyByEmail} />
        <ModalRoute path="/accountManagement/VerifyBySMS" component={VerifyBySMS} />
      </PanelsContainer>
      <PanelsFooter>
        <ModalRoute path="/accountManagement/login" component={SocialMedia} />
        <ModalRoute path="/accountManagement/singup" component={SocialMedia} />
        <ModalRoute path="/accountManagement/singup" component={ModalLoginFooter} />
        <ModalRoute path="/accountManagement/VerifyAccountEmailOrSms" component={ModalLoginFooter} />
      </PanelsFooter>
    </ModalContent>
  </Modal>
);

export default translate('accountManagement')(AccountManagementModals);
