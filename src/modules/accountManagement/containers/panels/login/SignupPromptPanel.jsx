import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, Column } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { SmallSpacer, MediumSpacer, LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const PanelImage = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const LoginFormPanel = () => (
  <Column spaceBetween style={{ width: '300px', backgroundColor: 'white', margin: '0 auto' }}>
    <CenterAlignedColumn>
      <PanelTitle uppercase>
        REGISTER
      </PanelTitle>
      <SmallSpacer />
      <PanelSubtitle>
        Join our community
      </PanelSubtitle>
    </CenterAlignedColumn>
    <PanelImage />
    <Column fullWidth alignCenter>
      <PanelContentLabel >
        Do not have account ?
      </PanelContentLabel>
      <LargeSpacer />
      <BasicButton>
        Create an account
      </BasicButton>
      <MediumSpacer />
      <PanelContentMinorLabel>
        {/* Placeholder to justify the Registeration to be similar to the login */}
        &nbsp;
      </PanelContentMinorLabel>
    </Column>
  </Column>
);

export default LoginFormPanel;
