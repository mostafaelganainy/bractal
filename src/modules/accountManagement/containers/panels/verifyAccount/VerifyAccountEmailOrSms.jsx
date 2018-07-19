import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import Media from 'react-media';

import { ParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { MediumSpacer, XLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import Panel, { PanelRoot } from '~/modules/accountManagement/components/basic/Panel';
import { cssMediaMax, mediaQueryMin } from '~/modules/core/utils/cssHelpers/cssMedia';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';

const InputLayout = styled(PanelRoot)`
  display: flex;
  align-items: stretch;

  ${cssMediaMax.mobile`
    width: 270px;
  `}
  ${cssMediaMax.tablet`
    width: 220px;
  `}
`;

const ResponsivePanel = styled(Panel)`
  ${cssMediaMax.mobile`
    width: 90%;
  `}
`;

const MediumLogo = styled(HomePageLogo)`
  height: unset;
  width: unset;
  max-width: 80px;
`;

const SpacedList = styled(List)`
  &&& {
    margin-top: 0px;
    margin-bottom: 0px;

    ${cssMediaMax.tablet`
      margin: auto; 
    `}
    
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

const VerifyByEmailButton = () => (
  <InputLayout>
    <ModalLink to="/accountManagement/VerifyByEmail">
      <BasicButton width="100%">
        <Trans i18nKey="verifyAccount.VerifyByMail" />
      </BasicButton>
    </ModalLink>
  </InputLayout>
);

const VerifyBySMSButton = () => (
  <InputLayout>
    <ModalLink to="/accountManagement/VerifyBySMS">
      <BasicButton width="100%">
        <Trans i18nKey="verifyAccount.VerifyBySMS" />
      </BasicButton>
    </ModalLink>
  </InputLayout>
);

const EmailOrSMS = () => (
  <ResponsivePanel
    title="VERIFY YOUR ACCOUNT"
    subTitle="Necessary Step to active your account"
  >
    <CenterAlignedColumn>
      <MediumLogo />
      <XLargeSpacer />
      <ParagraphPanelContent>
        <CenterAlignedRow>
          <CenterAlignedColumn>
            <Trans i18nKey="verifyAccount.verifyParagraph" />
          </CenterAlignedColumn>
        </CenterAlignedRow>
      </ParagraphPanelContent>
      <MediumSpacer />
      <Media query={mediaQueryMin('mobile')}>
        {isOnDesktop => (isOnDesktop ? (
          <CenterAlignedRow>
            <VerifyByEmailButton />
            <MediumSpacer />
            <VerifyBySMSButton />
          </CenterAlignedRow>
        ) : (
          <CenterAlignedColumn>
            <VerifyByEmailButton />
            <MediumSpacer />
            <VerifyBySMSButton />
          </CenterAlignedColumn>
        ))}
      </Media>
      <MediumSpacer />
      <LeftAlignedColumn>
        <SpacedList TxtList={verifyByTypes} />
      </LeftAlignedColumn>
    </CenterAlignedColumn>
  </ResponsivePanel>
);

export default EmailOrSMS;
