import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, ParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn, LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow, Row } from '~/modules/coreUI/components/layouts/helpers/Rows';
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

const ModalLinkBtn = styled(ModalLink)`
  width:50%;
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
         width: '400px', backgroundColor: 'white', margin: '0 auto', borderRadius: '10px',
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
        <Row fullWidth spaceBetween>
          <ModalLinkBtn to="/accountManagement/VerficationCodeEmail">
            <BasicButton width="100%">
              Verify by E-mail
            </BasicButton>
          </ModalLinkBtn>
          <MediumSpacer />
          <ModalLinkBtn to="/accountManagement/VerficationCodeSMS">
            <BasicButton width="100%">
             Verify by SMS
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
            Back to
            <SmallSpacer />
            <ModalLink to="/accountManagement/login">
              Login
            </ModalLink>
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
