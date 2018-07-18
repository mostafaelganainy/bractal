import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

import { ParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { MediumSpacer, XXXXXLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;
`;

const MediumLogo = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-width: 80px;
`;

const SpacedList = styled(List)`
  &&& {
    li {
      margin-top: 10px;
    }
  }
`;

// const IMAGE_PATH = '/images/AccountManagement';
const verifyByTypes = [
  <span>
    <b> <Trans i18nKey="verifyAccount.VerifyByMail" /> </b>
    <Trans i18nKey="verifyAccount.VerifyEmailTxt" />
  </span>,
  <span>
    <b> <Trans i18nKey="verifyAccount.VerifyBySMS" /> </b>
    <Trans i18nKey="verifyAccount.VerifySMSTxt" />
  </span>,
];


const EmailOrSMS = () => (
  <Panel
    title="VERIFY YOUR ACCOUNT"
    subTitle="Necessary Step to active your account"
  >
    <CenterAlignedColumn>
      <XXXXXLargeSpacer />
      {/*
      <verifyAccountImage
        src={`${IMAGE_PATH}/logo.png`}
        srcSet={`${IMAGE_PATH}/logo@2x.png 2x,
        ${IMAGE_PATH}/logo@2x.png 3x`}
      />
      */}
      {/*
      <verifyAccountImage
        src={`${IMAGE_PATH}/logo.png`}
        srcSet={`${IMAGE_PATH}/logo@2x.png 2x,
        ${IMAGE_PATH}/logo@2x.png 3x`}
      />
      */}
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
      <CenterAlignedRow>
        <InputLayout>
          <ModalLink to="/accountManagement/VerifyByEmail">
            <BasicButton width="100%">
              <Trans i18nKey="verifyAccount.VerifyByMail" />
            </BasicButton>
          </ModalLink>
        </InputLayout>
        <MediumSpacer />
        <InputLayout>
          <ModalLink to="/accountManagement/VerifyBySMS">
            <BasicButton width="100%">
              <Trans i18nKey="verifyAccount.VerifyBySMS" />
            </BasicButton>
          </ModalLink>
        </InputLayout>
      </CenterAlignedRow>
      <MediumSpacer />
      <LeftAlignedColumn>
        <SpacedList TxtList={verifyByTypes} />
      </LeftAlignedColumn>
      <XXLargeSpacer />
    </CenterAlignedColumn>
  </Panel>
);

export default EmailOrSMS;
