
import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { withModules } from '../../../utils/modulesLoader';
import MenuItemRenderer from './MenuItemRenderer';

const LightBorderMenu = styled(Menu)`
  &&& {
    display: flex;
    align-items: center;
    
    border: solid;
    border-color: rgba(40,40,40,0.1);
    border-width: 1px;

    .item:before {
      background: rgba(34,36,38,0);
    }

    ${props => props['custom-header-styles']}
  }
`;

class BottomNav extends Component {
  state = {
    dropdownMenuVisible: false,
  };
  handleClick = () => {
    this.setState({ dropdownMenuVisible: !this.state.dropdownMenuVisible });
  };
  render() {
    const { menuInfo, customHeaderStyles } = this.props;

    return (
      <LightBorderMenu custom-header-styles={customHeaderStyles}>
        {menuInfo.left.map(item => (
          <MenuItemRenderer key={item.key} itemInfo={item} />
        ))}
        <Menu.Menu position="right">
          {menuInfo.right.map(item => (
            <MenuItemRenderer key={item.key} itemInfo={item} />
          ))}
        </Menu.Menu>
      </LightBorderMenu>
    );
  }
}

BottomNav.MenuInfoPropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    ...MenuItemRenderer.ItemInfoPropTypes,
  })),
};

BottomNav.propTypes = PropTypes.shape({
  customHeaderStyles: PropTypes.string,
  menuInfo: PropTypes.shape({
    left: PropTypes.shape({
      ...BottomNav.MenuInfoPropTypes,
    }),
    right: PropTypes.shape({
      ...BottomNav.MenuInfoPropTypes,
    }),
  }).isRequired,
}).isRequired;

export default withModules(BottomNav);
