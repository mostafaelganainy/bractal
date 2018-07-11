import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, PanelContentLabel } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { SmallSpacer, MediumSpacer, LargeSpacer, XXLargeSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const PanelImage = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const LoginFormPanel = () => (
  <CenterAlignedColumn style={{ width: '300px', backgroundColor: 'white', margin: '0 auto' }}>
    <PanelTitle uppercase>
      REGISTER
    </PanelTitle>
    <SmallSpacer />
    <PanelSubtitle>
      Join our community
    </PanelSubtitle>
    <XXXXXLargeSpacer />
    <PanelImage />
    <XXLargeSpacer />
    <PanelContentLabel >
      Do not have account ?
    </PanelContentLabel>
    <LargeSpacer />
    <BasicButton>
      Create an account
    </BasicButton>
    <MediumSpacer />
    <MediumSpacer />
  </CenterAlignedColumn>
);

export default LoginFormPanel;
