import React from 'react';

import { TopAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import { translate } from 'react-i18next';

import LoginFormPanel from './LoginFormPanel';
import SignupPromptPanel from './SignupPromptPanel';

const Login = () => (
  <Modal>
    <TopAlignedRow>
      <LoginFormPanel />
      <SignupPromptPanel />
    </TopAlignedRow>
  </Modal>
);

export default translate('accountManagement')(Login);
