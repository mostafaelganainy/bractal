import React from 'react';
import styled from 'styled-components';
import { ParagraphFooterContent, SecondTitle, CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow, Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
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

const VerficationCodeEmail = () => (
  <Modal>
    <DesktopContainer>
      <Panel title="RECOVER YOUR PASSWORD" subTitle="Follow the steps to reset your password" >
        <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
          <XXXXXLargeSpacer />
          <RecoverPasswordImage
            src={`${IMAGE_PATH}/SMSImages.png`}
            srcset={`${IMAGE_PATH}/SMSImages.png 2x,
            ${IMAGE_PATH}/SMSImages.png 3x`}
          />
          <XXXXXLargeSpacer />
          <SecondTitle>
            <Trans i18nKey="forgetPassVerifyEmailSMS.EmailSecondTitle" />
          </SecondTitle>
          <XLargeSpacer />
          <CenteredParagraphPanelContent>
            <Trans i18nKey="forgetPassVerifyEmailSMS.EmailParagraph" />
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
          <BasicButton>  <Trans i18nKey="forgetPassVerifyEmailSMS.Button" /> </BasicButton>
          <XXLargeSpacer />
          <ParagraphFooterContent>
            <CenterAlignedRow>
              <Trans i18nKey="forgetPassVerifyEmailSMS.Footer" />
            </CenterAlignedRow>
          </ParagraphFooterContent>
        </CenterAlignedColumn>
      </Panel>
    </DesktopContainer>
  </Modal>
);

export default translate('accountManagement')(VerficationCodeEmail);