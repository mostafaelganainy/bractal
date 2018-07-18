import React from 'react';
import styled from 'styled-components';
import { PanelTitle, PanelSubtitle, CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import RelayForm from '~/modules/coreUI/components/forms/RelayForm';
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
const DesktopContainer = styled(Row)`
  padding: 40px;
  border: 1px solid;
  border-radius: 7px;
  border-color: white;
  background-color: ${props => props.theme.colors.named.white};
  @media (max-width: 425px) {
    padding: 20px;
  }
`;

const VerficationCodeSMS = () => (
  <Modal>
    <DesktopContainer>
      <Panel
        title="VERIFY YOUR ACCOUNT"
        subTitle="Necessary Step to active your account"
      >
        <CenterAlignedColumn>
          <PanelTitle uppercase>
            <Trans i18nKey="verifyAccount.HeaderTitle" />
          </PanelTitle>
          <PanelSubtitle>
            <Trans i18nKey="verifyAccount.SubTitle" />
          </PanelSubtitle>
          <XXXXXLargeSpacer />
          <RecoverPasswordImage
            src={`${IMAGE_PATH}/sms.png`}
            srcset={`${IMAGE_PATH}/sms.png 2x,
            ${IMAGE_PATH}/sms.png 3x`}
          />
          <XXXXXLargeSpacer />
          <MediumSpacer />
          <CenteredParagraphPanelContent>
            <Trans i18nKey="verifyAccount.SMSTxt" />
          </CenteredParagraphPanelContent>
          <MediumSpacer />
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
    </DesktopContainer>
  </Modal>
);

export default translate('accountManagement')(VerficationCodeSMS);

