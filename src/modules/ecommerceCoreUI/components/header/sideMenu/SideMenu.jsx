import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import DropdownElement from './DropdownElement';
// import Dropdown from 'semantic-ui-react';

const SideMenuContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.named.white};
`;

const SideMenu = () => (
  <SideMenuContainer>
    <Heading />
    <DropdownElement />
  </SideMenuContainer>
);

export default SideMenu;
