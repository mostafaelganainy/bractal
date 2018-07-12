import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const CopyrightWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  color:  ${props => props.theme.colors.named.white};
  height: 55px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fonts.sizes.small}px;
`;

const Copyright = () => (
  <CopyrightWrapper>
    <Container>
      Copyright © 2018, aykmall.com. All Rights Reserved.
    </Container>
  </CopyrightWrapper>
);

export default Copyright;
