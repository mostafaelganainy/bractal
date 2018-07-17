import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import SocialMedia from '~/modules/ecommerceCoreUI/components/header/headerActions/SocialMedia';
import withUserInfo from '~/modules/core/utils/accessManagementHelpers/withUserInfo';
import { BasicButton } from '~/modules/ecommerceCoreUI/components/basic/BasicButton';
import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import Heading from './Heading';
import DropdownElement from './DropdownElement';


const SideMenuContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.named.white};
  a{
    color: #fff;
  }
`;
const Item = styled.div`
  padding: 11px 27px;
  font-size: ${props => props.theme.fonts.sizes.small}px;
  text-transform: capitalize;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);        
  :after {
    content : '';
    position: absolute;
    left: 13px;
    top: 17px;
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.colors.named.white};
    border-radius: 50%;
  }
`;
const SocialMediaContent = styled(SocialMedia)`
  color: #fff;
`;
const Logout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const logout = (e, invalidateUser) => {
  e.stopPropagation();
  invalidateUser();
};

const SideMenu = props => (
  <SideMenuContainer>
    <Heading />
    <Item>Home</Item>
    <DropdownElement />
    {props.authenticated ?
      (
        <Logout>
          <LargeSpacer />
          <BasicButton
            primary
            onClick={e => logout(e, props.invalidateUser)}
          >
            Log out
          </BasicButton>
          <LargeSpacer />
        </Logout>
      )
      :
      ' '
    }
    <SocialMediaContent alignment="center" />
  </SideMenuContainer>
);

SideMenu.propTypes = {
  invalidateUser: PropTypes.bool,
  authenticated: PropTypes.bool,
};

SideMenu.defaultProps = {
  invalidateUser: ' ',
  authenticated: ' ',
};

export default withUserInfo(SideMenu);
