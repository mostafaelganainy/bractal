import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, ParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;
const ButtonsCont = styled(CenterAlignedRow)`
  width:95%;
`;

const ModalLinkBtn = styled(ModalLink)`
 a{
   color:white;
 }
`;

const IMAGE_PATH = '/images/AccountManagement';
const verifyByTypes = [
  <span><b> Verify by Email </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </span>,
  <span><b> Verify by SMS </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
   sed do eiusmod tempor.
  </span>];


const EmailOrSMS = () => (
  <Modal>
    <div>
      <CenterAlignedColumn style={{
         width: '500px', backgroundColor: 'white', margin: '0 auto', borderRadius: '10px',
    }}>
        <PanelTitle uppercase>
          <Trans i18nKey="headerTitle" />
        </PanelTitle>
        <PanelSubtitle>
          <Trans i18nKey="Followthestepstoresetyourpassword" />
        </PanelSubtitle>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CenterAlignedColumn>
          </CenterAlignedRow>
        </ParagraphPanelContent>
        <MediumSpacer />
        <ButtonsCont>
          <BasicButton width="50%">
            <ModalLinkBtn to="/accountManagement/VerficationCode">
            Verify by E-mail
            </ModalLinkBtn>
          </BasicButton>
          <MediumSpacer />
          <BasicButton width="50%"> Verify by SMS </BasicButton>
        </ButtonsCont>
        <MediumSpacer />
        <LeftAlignedColumn>
          <List TxtList={verifyByTypes} />
        </LeftAlignedColumn>
        <XXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
            Back to
            <SmallSpacer />
            <ModalLink to="/accountManagement/VerficationCode">
              Login
            </ModalLink>
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
