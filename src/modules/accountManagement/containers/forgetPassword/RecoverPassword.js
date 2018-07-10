import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, ParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Modal from '~/modules/core/components/Modal';
import Image from '~/modules/coreUI/components/basic/Image';
import Input from '~/modules/coreUI/components/basic/Input';
import { MediumSpacer, XXXXXLargeSpacer } from '../../../coreUI/components/layouts/helpers/Spacers';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const IMAGE_PATH = '/images/accountManagement/forgetPassword/recoverPassword';

const RecoverPasswords = () => (
  <Modal>
    <CenterAlignedColumn style={{ width: '300px', backgroundColor: 'white' }}>
      <PanelTitle uppercase>
        Recover Your Password
      </PanelTitle>
      <PanelSubtitle>
        Follow the steps to reset your password
      </PanelSubtitle>
      <XXXXXLargeSpacer />
      <RecoverPasswordImage
        src={`${IMAGE_PATH}/image.png`}
        srcset={`${IMAGE_PATH}/image@2x.png 2x,
        ${IMAGE_PATH}/image@3x.png 3x`}
      />
      <XXXXXLargeSpacer />

      <ParagraphPanelContent>
        1- Enter your username / email address.
        <br />
        2- Check your inbox for verification Code.
        <br />
        3- Use your code to verify your account and create a new password.
      </ParagraphPanelContent>
      <MediumSpacer />
    </CenterAlignedColumn>
  </Modal>
);

        <ParagraphPanelContent>
          1- Enter your username / email address.
          <br />
          2- Check your inbox for verification Code.
          <br />
          3- Use your code to verify your account and create a new password.
        </ParagraphPanelContent>
        <MediumSpacer />
        <Input placeholder="Email/Mobile" type="text" border_Radius="20px" />
      </CenterAlignedColumn>
    </Modal>
  )
}

export default RecoverPasswords;
