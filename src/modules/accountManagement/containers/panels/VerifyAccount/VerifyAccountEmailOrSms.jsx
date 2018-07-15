import React from 'react';
import styled from 'styled-components';

import { ParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow, Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';
import Panel from '~/modules/accountManagement/components/basic/Panel';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const MediumLogo = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-width: 80px;
`;


const ModalLinkBtn = styled(ModalLink)`
  width:50%;
`;
const PanelCont = styled(Panel)`
      width:100%;
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

// const IMAGE_PATH = '/images/AccountManagement';
const verifyByTypes = [
  <span><b> <Trans i18nKey="verifyAccount.VerifyByMail" /> </b>  <Trans i18nKey="verifyAccount.VerifyEmailTxt" />
  </span>,
  <span><b> <Trans i18nKey="verifyAccount.VerifyBySMS" /> </b> <Trans i18nKey="verifyAccount.VerifySMSTxt" />
  </span>];


const EmailOrSMS = () => (
  <Modal>
    <DesktopContainer>
      <PanelCont
        title="VERIFY YOUR ACCOUNT"
        subTitle="Necessary Step to active your account"
      >
        <CenterAlignedColumn>
          <XXXXXLargeSpacer />
          {/* <verifyAccountImage
            src={`${IMAGE_PATH}/logo.png`}
            srcSet={`${IMAGE_PATH}/logo@2x.png 2x,
            ${IMAGE_PATH}/logo@2x.png 3x`}
          /> */}
          {/* <verifyAccountImage
            src={`${IMAGE_PATH}/logo.png`}
            srcSet={`${IMAGE_PATH}/logo@2x.png 2x,
            ${IMAGE_PATH}/logo@2x.png 3x`}
          /> */}
          <MediumLogo />
          <XXXXXLargeSpacer />
          <ParagraphPanelContent>
            <CenterAlignedRow>
              <CenterAlignedColumn>
                <Trans i18nKey="verifyAccount.verifyParagraph" />
              </CenterAlignedColumn>
            </CenterAlignedRow>
          </ParagraphPanelContent>
          <MediumSpacer />
          <Row fullWidth spaceBetween>
            <ModalLinkBtn to="/accountManagement/VerifyByEmail">
              <BasicButton width="100%">
                <Trans i18nKey="verifyAccount.VerifyByMail" />
              </BasicButton>
            </ModalLinkBtn>
            <MediumSpacer />
            <ModalLinkBtn to="/accountManagement/VerifyBySMS">
              <BasicButton width="100%">
                <Trans i18nKey="verifyAccount.VerifyBySMS" />
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
              <Trans i18nKey="verifyAccount.footerTxt" />
              <SmallSpacer />
              <ModalLink to="/accountManagement/login">
                <Trans i18nKey="verifyAccount.footerLink" />
              </ModalLink>
            </CenterAlignedRow>
          </ParagraphFooterContent>
        </CenterAlignedColumn>
      </PanelCont>
    </DesktopContainer>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
