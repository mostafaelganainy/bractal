import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const IMAGE_PATH = '/images/accountManagement/forgetPassword/recoverPassword';


const Login = () => (
  <Modal>
    <div>
      <CenterAlignedColumn style={{ width: '300px', backgroundColor: 'white', margin: '0 auto' }}>
        <PanelTitle uppercase>
          LOGIN
        </PanelTitle>
        <PanelSubtitle>
          Login to your account
        </PanelSubtitle>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/image.png`}
          srcset={`${IMAGE_PATH}/image@2x.png 2x,
          ${IMAGE_PATH}/image@3x.png 3x`}
        />
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
        <BasicButton> <Trans i18nKey="Requestpasswordrecovery" /> </BasicButton>
        <MediumSpacer />
        <MediumSpacer />
        <CenterAlignedRow style={{ backgroundColor: '#faf9f9' }}>
          Forgot your password ?
          <SmallSpacer />
          <ModalLink to="/accountManagement/recoverPassword">
            Recover
          </ModalLink>
        </CenterAlignedRow>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(Login);
