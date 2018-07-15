import React from 'react';
import styled from 'styled-components';
import { SmallTitle } from '~/modules/ecommerceCoreUI/components/basic/Labels';
import { LargeSpacer, MediumSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

const DownloadAppWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    font-size: ${props => props.theme.fonts.sizes.xSmall}px;
    color: ${props => props.theme.colors.labels.subtle};
    font-weight: 300;
  }
`;

const DownloadApp = props => (
  <DownloadAppWrapper {...props}>
    <SmallTitle>Download our app</SmallTitle>
    <LargeSpacer />
    <p>
      Now you can download our app from different
      platforms like android, ios, and windows phone
    </p>
    <img src="images/Footer/android-btn.png" alt="" />
    <MediumSpacer />
    <img src="images/Footer/appstore-btn.png" alt="" />
  </DownloadAppWrapper>
);

export default DownloadApp;
