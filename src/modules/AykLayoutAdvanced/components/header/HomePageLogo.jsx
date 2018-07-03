import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const LogoImage = styled(Image)`
  padding: 0px;
  height: 100px;
`;

const HomePageLogo = () => (
  <LogoImage
    src="/images/Header/badr-logo.png"
  />
);

export default HomePageLogo;
