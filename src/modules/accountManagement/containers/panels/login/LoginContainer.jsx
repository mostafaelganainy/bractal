import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import Media from 'react-media';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { mediaQueryMax, cssMediaMin } from '~/modules/core/utils/cssHelpers/cssMedia';

import LoginFormPanel from './LoginFormPanel';
import SignupPromptPanel from './SignupPromptPanel';

const DesktopContainer = styled(Row)`
  width: 900px;
  height: 530px;
  padding: 40px;
  border: 1px solid;
  border-radius: 7px;
  border-color: white;
  background-color: ${props => props.theme.colors.named.white};
`;

// eslint-disable-next-line react/prop-types
const PanelContent = styled(CenterAlignedColumn)`
  ${cssMediaMin.desktop`
    height: 275px;
  `}
  width: 100%;
  justify-content: flex-end;
`;

const renderForDesktop = () => (
  <DesktopContainer stretchAlign>
    <LoginFormPanel panelContentContainer={PanelContent} />
    <SignupPromptPanel panelContentContainer={PanelContent} />
  </DesktopContainer>
);

const renderForMobile = () => (
  <CenterAlignedColumn>
    <LoginFormPanel panelContentContainer={PanelContent} />
    <SignupPromptPanel panelContentContainer={PanelContent} />
  </CenterAlignedColumn>
);

const Login = () => (
  <Modal>
    <Media query={mediaQueryMax('mobile')}>
      {matches => (
        matches ? (
          renderForMobile()
        ) : (
          renderForDesktop()
        )
      )}
    </Media>
  </Modal>
);

export default translate('accountManagement')(Login);
