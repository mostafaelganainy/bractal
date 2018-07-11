import React from 'react';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import { translate } from 'react-i18next';
import Media from 'react-media';
import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import styled from 'styled-components';

import LoginFormPanel from './LoginFormPanel';
import SignupPromptPanel from './SignupPromptPanel';
import { CenterAlignedColumn } from '../../../../coreUI/components/layouts/helpers/Columns';

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
const PanelContent = ({ children }) =>
  <CenterAlignedColumn style={{ height: '275px', width: '100%', justifyContent: 'flex-end' }}>{ children }</CenterAlignedColumn>;

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
