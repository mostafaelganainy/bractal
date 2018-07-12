import React from 'react';
import styled from 'styled-components';

import { ParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow, Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Panel from '~/modules/accountManagement/components/basic/Panel';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;
const PanelCont = styled(Panel)`
    width:500px;
`;

const ModalLinkBtn = styled(ModalLink)`
  width:50%;
`;

const IMAGE_PATH = '/images/AccountManagement';
const verifyByTypes = [
  <span><b><Trans i18nKey="forgetPassEmailOrSMS.EmailTxt" /> </b><Trans i18nKey="forgetPassEmailOrSMS.VerifyEmailTxt" />
  </span>,
  <span><b> <Trans i18nKey="forgetPassEmailOrSMS.SMSTxt" /> </b> <Trans i18nKey="forgetPassEmailOrSMS.VerifySMSTxt" />
  </span>];


const EmailOrSMS = () => (
  <Modal>
    <PanelCont title="RECOVER YOUR PASSWORD" subTitle="Follow the steps to reset your password" >
      <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/logo.png`}
          srcset={`${IMAGE_PATH}/logo@2x.png 2x,
          ${IMAGE_PATH}/logo@2x.png 3x`}
        />
        <XXXXXLargeSpacer />
        <ParagraphPanelContent>
          <CenterAlignedRow>
            <CenterAlignedColumn>
              <Trans i18nKey="forgetPassEmailOrSMS.VerifyParagraph" />
            </CenterAlignedColumn>
          </CenterAlignedRow>
        </ParagraphPanelContent>
        <MediumSpacer />
        <Row fullWidth spaceBetween>
          <ModalLinkBtn to="/accountManagement/VerficationCodeEmail">
            <BasicButton width="100%">
              <Trans i18nKey="forgetPassEmailOrSMS.EmailTxt" />
            </BasicButton>
          </ModalLinkBtn>
          <MediumSpacer />
          <ModalLinkBtn to="/accountManagement/VerficationCodeSMS">
            <BasicButton width="100%">
              <Trans i18nKey="forgetPassEmailOrSMS.SMSTxt" />
            </BasicButton>
          </ModalLinkBtn>
        </Row>
        <MediumSpacer />
        <LeftAlignedColumn>
          <List TxtList={verifyByTypes} />
        </LeftAlignedColumn>
        <XXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
            <Trans i18nKey="recoverPassword.footer_BackTo" />
            <SmallSpacer />
            <ModalLink to="/accountManagement/login">
              <Trans i18nKey="recoverPassword.footer_Link" />
            </ModalLink>
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </PanelCont>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
