import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import Media from 'react-media';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { cssMediaMin, cssMediaMax, mediaQueryMin } from '~/modules/core/utils/cssHelpers/cssMedia';
import Separator from '~/modules/coreUI/components/layouts/helpers/Separator';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Panel from '~/modules/accountManagement/components/basic/Panel';

import LoginFormPanel from './LoginPanel';
import SignupPromptPanel from './SignupPromptPanel';


// eslint-disable-next-line react/prop-types
const PanelContent = styled(CenterAlignedColumn)`
  ${cssMediaMin.desktop`
    height: 275px;
  `}
  width: 100%;
  justify-content: flex-end;  
`;

const PanelContainer = styled(Panel)`
  flex-grow: 0;
`;

const RootContainer = styled(CenterAlignedRow)`
  align-self: stretch;
  justify-content: space-evenly;
  align-items: stretch;
  flex-grow: 2;

  ${cssMediaMax.tablet`
    flex-direction: column;
    align-items: center;
  `}
`;

const renderSeparator = () => (
  <Media
    query={mediaQueryMin('desktop')}
    render={() => (
      <Separator vertical offset="100px" separatorLength="large" separatorColorTone="normal" />
    )}
  />
);

const LoginContainer = () => (
  <RootContainer>
    <LoginFormPanel panelContentContainer={PanelContent} panelContainer={PanelContainer} />
    {renderSeparator()}
    <SignupPromptPanel panelContentContainer={PanelContent} panelContainer={PanelContainer} />
  </RootContainer>
);

export default translate('accountManagement')(LoginContainer);
