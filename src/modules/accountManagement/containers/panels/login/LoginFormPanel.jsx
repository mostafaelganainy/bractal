import React from 'react';

import { PanelTitle, PanelSubtitle, PanelContentLabel, PanelContentMinorLabel } from '~/modules/accountManagement/components/basic/Labels';
import { Column, CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { Row, CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, LargeSpacer, MediumSpacer, XXXLargeSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const LoginFormPanel = () => (
  <Column spaceBetween style={{ width: '300px', backgroundColor: 'white', margin: '0 auto' }}>
    <CenterAlignedColumn>
      <PanelTitle uppercase>
        LOGIN
      </PanelTitle>
      <PanelSubtitle>
        Login to your account
      </PanelSubtitle>
    </CenterAlignedColumn>
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
    <XXXLargeSpacer />
    <Row spaceBetween centerAlign fullWidth>
      <PanelContentLabel>
        Remember Me
      </PanelContentLabel>
      <PanelContentLabel>
        <ModalLink to="/accountManagement/recoverPassword">
          Lost Your Password
        </ModalLink>
      </PanelContentLabel>
    </Row>
    <LargeSpacer />
    <BasicButton>
      Login
    </BasicButton>
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
  </Column>
);

export default LoginFormPanel;
