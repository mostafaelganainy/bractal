import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import Media from 'react-media';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { cssMediaMin, mediaQueryMin } from '~/modules/core/utils/cssHelpers/cssMedia';
import Separator from '~/modules/coreUI/components/layouts/helpers/Separator';

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

const renderSeparator = () => (
  <Media
    query={mediaQueryMin('desktop')}
    render={() => (
      <Separator vertical offset="100px" separatorLength="large" separatorColorTone="normal" />
    )}
  />
);

const LoginContainer = () => (
  <React.Fragment>
    <LoginFormPanel panelContentContainer={PanelContent} />
    {renderSeparator()}
    <SignupPromptPanel panelContentContainer={PanelContent} />
  </React.Fragment>
);

export default translate('accountManagement')(LoginContainer);
