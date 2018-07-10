import React from 'react';
import styled from 'styled-components';
import HeadingUserLoggedout from './Heading/HeadingUserLoggedout';
// import HeadingUserLoggedin from './Heading/HeadingUserLoggedin';

const HeadingContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  height: 110px;
`;
const Heading = () => (
  <HeadingContainer>
    {/* user is not logged in */}
    <HeadingUserLoggedout />
    {/* user is logged in */}
    {/* <HeadingUserLoggedin /> */}
  </HeadingContainer>
);

export default Heading;
