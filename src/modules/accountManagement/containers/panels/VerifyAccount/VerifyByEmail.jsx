import React from 'react';
import styled from 'styled-components';
import { CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import RelayForm from '~/modules/coreUI/components/forms/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer, XLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Image from '~/modules/coreUI/components/basic/Image';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';

const IMAGE_PATH = '/images/AccountManagement';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;
`;

const VerficationCodeEmail = () => (
  <Panel
    title="VERIFY YOUR ACCOUNT"
    subTitle="Necessary Step to active your account"
  >
    <CenterAlignedColumn>
      <XXXXXLargeSpacer />
      <RecoverPasswordImage
        src={`${IMAGE_PATH}/SMSImages.png`}
        srcset={`${IMAGE_PATH}/SMSImages.png 2x,
        ${IMAGE_PATH}/SMSImages.png 3x`}
      />
      <XXXXXLargeSpacer />
      <XLargeSpacer />
      <CenteredParagraphPanelContent>
        <Trans i18nKey="verifyAccount.EmailTxt" />
      </CenteredParagraphPanelContent>
      <MediumSpacer />
      <InputLayout>
        <RelayForm
          options={{
            fields: [
              {
                name: 'code',
                placeholder: 'Add Code Here',
                input_type: 'textbox',
                type: 'RequiredString',
              },
            ],
          }}
        />
      </InputLayout>
      <XLargeSpacer />
      <BasicButton> <Trans i18nKey="verifyAccount.ButtonCreateAccount" /> </BasicButton>
      <XXLargeSpacer />
      {/*
      <ParagraphFooterContent>
        <CenterAlignedRow>
          <Trans i18nKey="verifyAccount.footerTxt" />
          <SmallSpacer />
          <ModalLink to="/accountManagement/login">
            <Trans i18nKey="verifyAccount.footerLink" />
          </ModalLink>
        </CenterAlignedRow>
      </ParagraphFooterContent>
      */}
    </CenterAlignedColumn>
  </Panel>
);

export default translate('accountManagement')(VerficationCodeEmail);
