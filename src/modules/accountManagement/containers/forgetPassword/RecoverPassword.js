import React from 'react';
import styled from 'styled-components';

import { PanelTitle, PanelSubtitle, ParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';
import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import Modal from '~/modules/coreUI/components/items/Modal';
import Image from '~/modules/coreUI/components/basic/Image';
import { MediumSpacer, XXXXXLargeSpacer } from '../../../coreUI/components/layouts/helpers/Spacers';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;

const IMAGE_PATH = 'images/accountManagement/forgetPassword/recoverPassword';

class RecoverPasswords extends React.Component {
  show = () => {
    // eslint-disable-next-line
    debugger
    this.popup.show();
  }

  render = () => (
    <Modal ref={(ref) => { this.popup = ref; }} >
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
  )
}

export default RecoverPasswords;
