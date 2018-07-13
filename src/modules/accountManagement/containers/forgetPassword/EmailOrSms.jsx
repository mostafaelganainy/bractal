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
import Select from '~/modules/accountManagement/components/basic/Select';
import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';
// import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
// import Media from 'react-media';

const MediumLogo = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-width: 80px;
`;
const PanelCont = styled(Panel)`
width:500px;
@media (max-width: 1024px) {
  width:100%;
  }
`;

const ModalLinkBtn = styled(ModalLink)`
  width:50%;
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

const verifyByTypes = [
  <span><b><Trans i18nKey="forgetPassEmailOrSMS.EmailTxt" /> </b><Trans i18nKey="forgetPassEmailOrSMS.VerifyEmailTxt" />
  </span>,
  <span><b> <Trans i18nKey="forgetPassEmailOrSMS.SMSTxt" /> </b> <Trans i18nKey="forgetPassEmailOrSMS.VerifySMSTxt" />
  </span>];

const EmailOrSMS = () => (
  <Modal>
    <DesktopContainer>
      <PanelCont title="RECOVER YOUR PASSWORD" subTitle="Follow the steps to reset your password" >
        <CenterAlignedColumn style={{ backgroundColor: 'white' }}>
          <XXXXXLargeSpacer />
          <MediumLogo />
          <Select />
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
    </DesktopContainer>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
