import React from 'react';
import styled from 'styled-components';

import { CenteredParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow, Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
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

const IMAGE_PATH = '/images/accountManagement/forgetPassword/renewPassword';

const RecoverPasswords = () => (
  <Modal>
    <DesktopContainer>
      <Panel
        title="VERIFY YOUR ACCOUNT"
        subTitle="Follow the steps to reset your password"
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
            <Trans i18nKey="CreateNewPassword.CreateNewPassParagraph" />
          </CenteredParagraphPanelContent>
          <MediumSpacer />
          <RelayForm
            options={{
              fields: [
                {
                  name: 'Add Password',
                  placeholder: 'Add Password',
                  input_type: 'textbox',
                  type: 'RequiredString',
                },
                {
                  name: 'Confirm Password',
                  placeholder: 'Confirm Password',
                  input_type: 'textbox',
                  type: 'RequiredString',
                },
              ],
            }}
          />
          <MediumSpacer />
          <BasicButton> <Trans i18nKey="CreateNewPassword.Button" /> </BasicButton>
          <XXXXXLargeSpacer />
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

export default translate('accountManagement')(RecoverPasswords);
