import React from 'react';
import styled from 'styled-components';
import { ParagraphFooterContent, SecondTitle, CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer, XLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Image from '~/modules/coreUI/components/basic/Image';
import Panel from '~/modules/accountManagement/components/basic/Panel';

const IMAGE_PATH = '/images/AccountManagement';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const VerficationCodeSMS = () => (
  <Modal>
    <Panel title="RECOVER YOUR PASSWORD" subTitle="Follow the steps to reset your password" >
      <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/sms.png`}
          srcset={`${IMAGE_PATH}/sms.png 2x,
          ${IMAGE_PATH}/sms.png 3x`}
        />
        <XXXXXLargeSpacer />
        <SecondTitle>
          <Trans i18nKey="forgetPassVerifyEmailSMS.SMSSecondTitle" />
        </SecondTitle>
        <MediumSpacer />
        <CenteredParagraphPanelContent>
          <Trans i18nKey="forgetPassVerifyEmailSMS.SMSParagraph" />
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
        <BasicButton> <Trans i18nKey="forgetPassVerifyEmailSMS.Button" /> </BasicButton>
        <XXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
            <Trans i18nKey="forgetPassVerifyEmailSMS.Footer" />
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </Panel>
  </Modal>
);

export default translate('accountManagement')(VerficationCodeSMS);

