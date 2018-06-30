import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import MenuItemRenderer from './MenuItemRenderer';

const TopNav = ({ menuInfo }) => (
  <div className="top-nav">
    <Container>
      <Menu>
        {menuInfo.items.filter(item => !item.position || item.position !== 'right').map(item => (
          <MenuItemRenderer key={item.key} itemInfo={item} />
        ))}
        <Menu.Menu position="right">
          {menuInfo.items.filter(item => item.position === 'right').map(item => (
            <MenuItemRenderer key={item.key} itemInfo={item} />
          ))}
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
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
