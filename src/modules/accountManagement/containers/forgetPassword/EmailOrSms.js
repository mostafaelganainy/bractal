import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, CenteredParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import { Button } from '~/modules/coreUI/components/basic/Button';
import List from '~/modules/coreUI/components/basic/List';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;
const ButtonsCont = styled(CenterAlignedRow)`
  width:85%;
`;
export const BasicButton = styled(Button)`
  margin-right:10px; 
`;

const IMAGE_PATH = '/images/AccountManagement';
const verifyByTypes = ['Verify by E-mail Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Verify by SMS Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'];


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
        <CenteredParagraphPanelContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CenteredParagraphPanelContent>
        <MediumSpacer />
        <ButtonsCont>
          <BasicButton width="50%"> Verify by E-mail</BasicButton>
          <BasicButton width="50%"> Verify by SMS </BasicButton>
        </ButtonsCont>
        <MediumSpacer />
        <MediumSpacer />
        <List TxtList={verifyByTypes} />
        <XXXXXLargeSpacer />
        <ParagraphFooterContent>
          <CenterAlignedRow>
            Back to
            <SmallSpacer />
            <ModalLink to="/accountManagement/recoverPassword">
              Login
            </ModalLink>
          </CenterAlignedRow>
        </ParagraphFooterContent>
      </CenterAlignedColumn>
    </div>
  </Modal>
);

export default translate('accountManagement')(EmailOrSMS);
