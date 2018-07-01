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
  }
`;

const TopNav = ({ menuInfo }) => (
  <BorderLessHeader>
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
  menuInfo: PropTypes.shape({
    ...TopNav.MenuInfoPropTypes,
  }).isRequired,
}).isRequired;

export default TopNav;
