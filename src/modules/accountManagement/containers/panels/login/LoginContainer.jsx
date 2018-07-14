import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { cssMediaMin, cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

import LoginFormPanel from './LoginPanel';
import SignupPromptPanel from './SignupPromptPanel';

const DesktopContainer = styled(Row)`
  ${cssMediaMin.desktop`
    width: 900px;
    height: 530px;
    padding: 40px;
  `}

  background-color: ${props => props.theme.colors.named.white};

  border: 1px solid;
  border-radius: 7px;
  border-color: white;  

  ${cssMediaMax.mobile`
    flex-direction: column;
    align-items: center;
  `}
`;

// eslint-disable-next-line react/prop-types
const PanelContent = styled(CenterAlignedColumn)`
  ${cssMediaMin.desktop`
    height: 275px;
  `}
  width: 100%;
  justify-content: flex-end;
`;

const Login = () => (
  <Modal>
    <DesktopContainer stretchAlign>
      <LoginFormPanel panelContentContainer={PanelContent} />
      <SignupPromptPanel panelContentContainer={PanelContent} />
    </DesktopContainer>
  </Modal>
);

export default translate('accountManagement')(Login);
