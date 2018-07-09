import React from 'react';
import { BasicButton } from '~/modules/ecommerceCoreUI/components/basic/BasicButton';

const HeadingUserLoggedout = () => (
  <React.Fragment>
    <img src="images/Header/sideMenu-logo.png" alt="logo" />
    <BasicButton primary>Log in / Sign up</BasicButton>
  </React.Fragment>
);

export default HeadingUserLoggedout;
