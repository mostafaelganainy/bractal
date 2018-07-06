import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItemRenderer from './MenuItemRenderer';

const BorderLessHeader = styled(Menu)`  
  &&& {
    display: flex;
    align-items: center;
    
    border: none;
    box-shadow: none;
    background-color: transparent;
    border-radius: 8px;

    .item:before {
      background: rgba(34,36,38,0);
    }

    ${props => props['custom-header-styles']}
  }
`;

const TopNav = ({ menuInfo, customHeaderStyles }) => (
  <BorderLessHeader custom-header-styles={customHeaderStyles}>
    {menuInfo.left.map(item => (
      <MenuItemRenderer key={item.key} itemInfo={item} />
    ))}
    <Menu.Menu position="right">
      {menuInfo.right.map(item => (
        <MenuItemRenderer key={item.key} itemInfo={item} />
      ))}
    </Menu.Menu>
  </BorderLessHeader>
);

TopNav.propTypes = PropTypes.shape({
  customHeaderStyles: PropTypes.string,
  menuInfo: PropTypes.shape({
    left: PropTypes.shape({
      ...MenuItemRenderer.ItemInfoPropTypes,
    }),
    right: PropTypes.shape({
      ...MenuItemRenderer.ItemInfoPropTypes,
    }),
  }).isRequired,
}).isRequired;

export default TopNav;
