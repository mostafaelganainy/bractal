import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const LogoImage = styled(Image)`
  padding: 0px;
`;

const HomePageLogo = props => (
  <LogoImage
    {...props}
    src="/images/Header/logo-header.png"
    srcSet="/images/Header/logo-header@2x.png 2x, /images/Header/logo-header@3x.png 3x"
  />
);

export default HomePageLogo;
