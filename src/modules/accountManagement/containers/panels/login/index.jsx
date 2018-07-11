import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, ParagraphPanelContent, ParagraphFooterContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import Modal from '~/modules/core/components/Modal/index';
import Image from '~/modules/coreUI/components/basic/Image';
import RelayForm from '~/modules/coreUI/components/basic/RelayForm';
import { BasicButton } from '~/modules/coreUI/components/basic/Button';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { SmallSpacer, MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { Trans, translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;


// const ModalContainer = styled(CenterAlignedColumn)`
//   width: '300px';
//   background-color: 'white';
//   margin: '0 auto';
//   border-radius:10px;
// `;

const IMAGE_PATH = '/images/accountManagement/forgetPassword/recoverPassword';


const Login = () => (
  <Modal>
    <div>
      <CenterAlignedColumn style={{
         width: '300px', backgroundColor: 'white', margin: '0 auto', borderRadius: '10px',
    }}>
        <PanelTitle uppercase>
          <Trans i18nKey="headerTitle" />
        </PanelTitle>
        <PanelSubtitle>
          <Trans i18nKey="Followthestepstoresetyourpassword" />
        </PanelSubtitle>
        <XXXXXLargeSpacer />
        <RecoverPasswordImage
          src={`${IMAGE_PATH}/image.png`}
          srcset={`${IMAGE_PATH}/image@2x.png 2x,
          ${IMAGE_PATH}/image@3x.png 3x`}
        />
        <XXXXXLargeSpacer />
        <ParagraphPanelContent>
          <Trans i18nKey="Enteryourusernameemailaddress" />
          <br />
          <Trans i18nKey="CheckyourinboxforverificationCode" />
          <br />
          <Trans i18nKey="Useyourcodetoverifyyouraccountandcreateanewpassword" />
        </ParagraphPanelContent>
        <MediumSpacer />
        <RelayForm
          options={[
            {
              name: 'Email',
              placeholder: 'Email/ Mobile Number',
              input_type: 'textbox',
              tcomb_type: 'String',
            },
          ]}
        />
        <MediumSpacer />
        <BasicButton width="90%"> <Trans i18nKey="Requestpasswordrecovery" /> </BasicButton>
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

export default translate('accountManagement')(Login);
