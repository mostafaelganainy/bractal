import React from 'react';
import styled from 'styled-components';

import { CenteredParagraphPanelContent, SecondTitle } from '~/modules/accountManagement/components/basic/Labels';

import Image from '~/modules/coreUI/components/basic/Image';
import { MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;


const IMAGE_PATH = '/images/AccountManagement';


const SMSContent = () => (
  <div>
    <RecoverPasswordImage
      src={`${IMAGE_PATH}/SMSImages.png`}
      srcset={`${IMAGE_PATH}/SMSImages.png 2x,
      ${IMAGE_PATH}/SMSImages.png 3x`}
    />
    <XXXXXLargeSpacer />
    <SecondTitle>
      SMS SENT
    </SecondTitle>
    <MediumSpacer />
    <CenteredParagraphPanelContent>
    The Verification code has been sent
    to your number address check your inbox
    </CenteredParagraphPanelContent>
  </div>

);

export default translate('accountManagement')(SMSContent);
