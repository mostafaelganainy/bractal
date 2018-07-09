import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const FooterConatiner = styled.div`
  background: ${props => props.theme.colors.primary}
`;
const Footer = () => (
  <FooterConatiner>
    <Container>
        Footer
    </Container>
  </FooterConatiner>
);

export default Footer;
