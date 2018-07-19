import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { BasicButton } from '~/modules/ecommerceCoreUI/components/basic/BasicButton';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';
import { navigateToModal } from '~/modules/core/utils/modalHelpers';

const HeadingContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  height: 110px;
`;
const LabelStyle = styled.div`
  color: ${props => props.theme.colors.named.white};
  font-size: ${props => props.theme.fonts.sizes.small}px;
  text-transform: capitalize;
`;
const Icon = styled.i`
font-size:40px;
`;

const Heading = props => (
  <HeadingContainer>
    {props.authenticated ?
      <React.Fragment>
        <Icon className="icon-userloggedin" />
        <LabelStyle>{props.userInfo.firstName}</LabelStyle>
      </React.Fragment>
    :
      <React.Fragment>
        <img src="/images/Header/sideMenu-logo.png" alt="logo" />
        <BasicButton
          primary
          onClick={() => navigateToModal(props.location, props.history, '/accountManagement/login')}
        >
          Log in / Sign up
        </BasicButton>
      </React.Fragment>
    }
  </HeadingContainer>
);
Heading.propTypes = PropTypes.shape({
  authenticated: PropTypes.boolen,
  userInfo: PropTypes.object,
}).isRequired;
export default withUserInfo(withRouter(Heading));
