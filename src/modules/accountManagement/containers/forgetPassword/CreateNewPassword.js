import React from 'react';
import styled from 'styled-components';

import { CenteredParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import RelayForm from '~/modules/coreUI/components/forms/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Panel from '~/modules/accountManagement/components/basic/Panel';


const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const IMAGE_PATH = '/images/accountManagement/forgetPassword/renewPassword';

const RecoverPasswords = () => (
  <Modal>
    <Panel
      title="VERIFY YOUR ACCOUNT"
      subTitle="Necessary Step to active your account"
    >
      <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/finger.png`}
          srcset={`${IMAGE_PATH}/finger@2x.png 2x,
          ${IMAGE_PATH}/finger@3x.png 3x`}
        />
        <XXXXXLargeSpacer />
        <CenteredParagraphPanelContent>
        Type a new password and be noticed
        that you didnt use this one before.
        </CenteredParagraphPanelContent>
        <MediumSpacer />
        <RelayForm
          options={[
            {
              name: 'Add Password',
              placeholder: 'Add Password',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
            {
              name: 'Confirm Password',
              placeholder: 'Confirm Password',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
          ]}
        />
        <MediumSpacer />
        <BasicButton width="90%"> Renew your password </BasicButton>
        <XXXXXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
            <Trans i18nKey="forgetPassVerifyEmailSMS.Footer" />
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </Panel>
  </Modal>
);

export default translate('accountManagement')(RecoverPasswords);
