import React from 'react';
import styled from 'styled-components';
import { TabLabel } from '~/modules/ecommerceCoreUI/components/basic/Labels';

const DownloadAppWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    text-align: center;
    font-size: ${props => props.theme.fonts.sizes.xSmall}px;
    color: ${props => props.theme.colors.labels.subtle};
    font-weight: 300;
  }
`;
const TabLabelItem = styled(TabLabel)`
  color: ${props => props.theme.colors.labels.important};
  font-weight: bold;
  text-transform: uppercase;
  font-family: Panton ,sans-serif;
`;
const DownloadApp = props => (
  <DownloadAppWrapper {...props}>
    <TabLabelItem>Download our app</TabLabelItem>
    <p>
      Now you can download our app from different
      platforms like android, ios, and windows phone
    </p>
    <img src="images/Footer/android-btn.png" alt="" />
    <img src="images/Footer/appstore-btn.png" alt="" />
  </DownloadAppWrapper>
);

export default DownloadApp;
