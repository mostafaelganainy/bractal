import React from 'react';
import styled from 'styled-components';

import { CenteredParagraphPanelContent } from '~/modules/accountManagement/components/basic/Labels';

import Image from '~/modules/coreUI/components/basic/Image';
import { MediumSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { translate } from 'react-i18next';

const RecoverPasswordImage = styled(Image)`
  height: unset;
  width: unset;
  max-height: 80px;
`;


const IMAGE_PATH = '/images/AccountManagement';


const EmailContent = () => (
  <div>
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
  </div>

);

export default translate('accountManagement')(EmailContent);
