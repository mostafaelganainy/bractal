import React from 'react';
import styled from 'styled-components';

import { ParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import RelayForm from '~/modules/coreUI/components/forms/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import { MediumSpacer, XXXXXLargeSpacer, XLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Panel from '~/modules/accountManagement/components/basic/Panel';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 120px;
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

const IMAGE_PATH = '/images/accountManagement/forgetPassword/recoverPassword';

const RecoverPasswords = () => (
  <Modal>
    <Row>
      <DesktopContainer>
        <Panel title="RECOVER YOUR PASSWORD" subTitle="Follow the steps to reset your password">
          <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
            <XXXXXLargeSpacer />
            <RecoverPasswordImage
              src={`${IMAGE_PATH}/image@2x.png`}
              srcset={`${IMAGE_PATH}/image@2x.png 2x,
              ${IMAGE_PATH}/image@3x.png 3x`}
            />
            <XXXXXLargeSpacer />
            <ParagraphPanelContent>
              <LeftAlignedColumn>
                <Trans i18nKey="recoverPassword.Enteryourusernameemailaddress" />
              </LeftAlignedColumn>
            </ParagraphPanelContent>
            <MediumSpacer />
            <RelayForm
              options={{
                fields: [
                  {
                    name: 'email',
                    placeholder: 'Email/Mobile Number',
                    input_type: 'textbox',
                    type: 'RequiredString',
                  },
                ],
              }}
            />
            <XLargeSpacer />
            <BasicButton>
              <Trans i18nKey="recoverPassword.Button" />
            </BasicButton>
            <XXLargeSpacer />
            {/*
            <ParagraphFooterContent>
              <CenterAlignedRow>
                <Trans i18nKey="recoverPassword.footer_BackTo" />
                <SmallSpacer />
                <ModalLink to="/accountManagement/EmailOrSMS">
                  <Trans i18nKey="recoverPassword.footer_Link" />
                </ModalLink>
              </CenterAlignedRow>
            </ParagraphFooterContent>
            */}
          </CenterAlignedColumn>
        </Panel>
      </DesktopContainer>
    </Row>
  </Modal>
);

export default translate('accountManagement')(RecoverPasswords);
