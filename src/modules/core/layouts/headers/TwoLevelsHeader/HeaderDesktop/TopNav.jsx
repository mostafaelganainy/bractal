import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItemRenderer from './MenuItemRenderer';

const BorderLessHeader = styled(Menu)`  
  &&& {
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
    {menuInfo.items.filter(item => !item.position || item.position !== 'right').map(item => (
      <MenuItemRenderer key={item.key} itemInfo={item} />
    ))}
    <Menu.Menu position="right">
      {menuInfo.items.filter(item => item.position === 'right').map(item => (
        <MenuItemRenderer key={item.key} itemInfo={item} />
      ))}
    </Menu.Menu>
  </BorderLessHeader>
);

TopNav.MenuInfoPropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    ...MenuItemRenderer.ItemInfoPropTypes,
  })),
};

TopNav.propTypes = PropTypes.shape({
  customHeaderStyles: PropTypes.string,
  menuInfo: PropTypes.shape({
    ...TopNav.MenuInfoPropTypes,
  }).isRequired,
}).isRequired;

export default TopNav;
