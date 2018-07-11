import React from 'react';
import styled from 'styled-components';
import { PanelTitle, PanelSubtitle, ParagraphFooterContent, SecondTitle, CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
// import EmailContent from '~/modules/accountManagement/containers/forgetPassword/EmailVerify';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer, XLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Image from '~/modules/coreUI/components/basic/Image';

const IMAGE_PATH = '/images/AccountManagement';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const VerficationCodeEmail = () => (
  <Modal>
    <div>
      <CenterAlignedColumn style={{
         width: '400px', backgroundColor: 'white', margin: '0 auto', borderRadius: '10px',
    }}>
        <PanelTitle uppercase>
          <Trans i18nKey="headerTitle" />
        </PanelTitle>
        <PanelSubtitle>
          <Trans i18nKey="Followthestepstoresetyourpassword" />
        </PanelSubtitle>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/SMSImages.png`}
          srcset={`${IMAGE_PATH}/SMSImages.png 2x,
          ${IMAGE_PATH}/SMSImages.png 3x`}
        />
        <XXXXXLargeSpacer />
        <SecondTitle>
        EMAIL SENT
        </SecondTitle>
        <XLargeSpacer />
        <CenteredParagraphPanelContent>
      The Verification code has been sent
      to your email address check your inbox
        </CenteredParagraphPanelContent>
        <MediumSpacer />
        <RelayForm
          options={[
            {
              name: 'code',
              placeholder: 'Add Code Here',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
          ]}
        />
        <XLargeSpacer />
        <BasicButton width="90%"> Reset your password </BasicButton>
        <XXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
           Copyright © 2018, aykmall.com. All Rights Reserved.
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(VerficationCodeEmail);
