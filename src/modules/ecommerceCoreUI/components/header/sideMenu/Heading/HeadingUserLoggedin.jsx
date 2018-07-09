import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.div`
  color: ${props => props.theme.colors.named.white};
  font-size: ${props => props.theme.fonts.sizes.small}px;
  text-transform: capitalize;
`;

const HeadingUserLoggedin = () => (
  <React.Fragment>
    <img src="images/Header/sideMenu-user.png" alt="user" />
    <LabelStyle>Ahmad Mohammad</LabelStyle>
  </React.Fragment>
);

export default HeadingUserLoggedin;
