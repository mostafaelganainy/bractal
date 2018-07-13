import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import DropdownElement from './DropdownElement';

const SideMenuContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.named.white};
`;

const SideMenu = () => (
  <SideMenuContainer>
    <Heading />
    <DropdownElement />
    {/* <SocialMedia /> */}
  </SideMenuContainer>
);

export default SideMenu;
