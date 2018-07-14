import React from 'react';
import styled from 'styled-components';

import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Modal from '~/modules/core/components/Modal/index';
import { cssMediaMin, cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

import Login from '~/modules/accountManagement/containers/panels/login/LoginContainer';
import RecoverPassword from '~/modules/accountManagement/containers/panels/RecoverPassword';
import CreateNewPassword from '~/modules/accountManagement/containers/forgetPassword/CreateNewPassword';
import EmailOrSms from '~/modules/accountManagement/containers/forgetPassword/EmailOrSms';
import VerficationCodeEmail from '~/modules/accountManagement/containers/forgetPassword/VerficationCodeEmail';
import VerficationCodeSMS from '~/modules/accountManagement/containers/forgetPassword/VerficationCodeSMS';
import VerifyAccountEmailOrSms from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyAccountEmailOrSms';
import VerifyByEmail from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyByEmail';
import VerifyBySMS from '~/modules/accountManagement/containers/panels/VerifyAccount/VerifyBySMS';

const PanelsContainer = styled(Row)` 
  ${cssMediaMax.mobile`
    flex-direction: column;
    align-items: center;
  `}
`;

const ModalContent = styled(Column)`
  ${cssMediaMin.desktop`
    width: 900px;
    height: 530px;
    padding: 40px;
  `}

  align-items: stretch;
  justify-content: stretch;

  background-color: ${props => props.theme.colors.named.white};

  border: 1px solid;
  border-radius: 7px;
  border-color: white; 
`;

export default () => (
  <Modal>
    <ModalContent>
      <PanelsContainer>
        <ModalRoute path="/accountManagement/login" component={Login} />
        <ModalRoute path="/accountManagement/recoverPassword" component={RecoverPassword} />
        <ModalRoute path="/accountManagement/CreateNewPassword" component={CreateNewPassword} />
        <ModalRoute path="/accountManagement/EmailOrSms" component={EmailOrSms} />
        <ModalRoute path="/accountManagement/VerficationCodeEmail" component={VerficationCodeEmail} />
        <ModalRoute path="/accountManagement/VerficationCodeSMS" component={VerficationCodeSMS} />
        <ModalRoute path="/accountManagement/VerifyAccountEmailOrSms" component={VerifyAccountEmailOrSms} />
        <ModalRoute path="/accountManagement/VerifyByEmail" component={VerifyByEmail} />
        <ModalRoute path="/accountManagement/VerifyBySMS" component={VerifyBySMS} />
      </PanelsContainer>
    </ModalContent>
  </Modal>
);
