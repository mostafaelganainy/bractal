import React from 'react';

import { PanelTitle, PanelSubtitle, PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans } from 'react-i18next';

const LoginFormPanel = () => (
  <CenterAlignedColumn style={{ width: '300px', backgroundColor: 'white', margin: '0 auto' }}>
    <PanelTitle uppercase>
      LOGIN
    </PanelTitle>
    <PanelSubtitle>
      Login to your account
    </PanelSubtitle>
    <XXXXXLargeSpacer />
    <MediumSpacer />
    <RelayForm
      options={[
        {
          name: 'username',
          placeholder: 'Email/ Mobile Number',
          input_type: 'textbox',
          tcomb_type: 'String',
        },
        {
          name: 'password',
          placeholder: 'Password',
          input_type: 'textbox',
          tcomb_type: 'String',
        },
      ]}
    />
    <MediumSpacer />
    <CenterAlignedRow spaceBetween>
      <PanelContentLabel>
        Remember Me
      </PanelContentLabel>
      <PanelContentLabel>
        <ModalLink to="/accountManagement/recoverPassword">
          Lost Your Password
        </ModalLink>
      </PanelContentLabel>
    </CenterAlignedRow>
    <SmallSpacer />
    <BasicButton> <Trans i18nKey="Requestpasswordrecovery" /> </BasicButton>
    <MediumSpacer />
    <MediumSpacer />
    <PanelContentMinorLabel>
      <CenterAlignedRow>
        Forgot your password ?
        <SmallSpacer />
        <ModalLink to="/accountManagement/recoverPassword">
          Recover
        </ModalLink>
      </CenterAlignedRow>
    </PanelContentMinorLabel>
  </CenterAlignedColumn>
);

export default LoginFormPanel;
