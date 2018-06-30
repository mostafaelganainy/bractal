
import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { withModules } from '../../../../utils/modulesLoader';
import MenuItemRenderer from './MenuItemRenderer';

class BottomNav extends Component {
  state = {
    dropdownMenuVisible: false,
  };
  handleClick = () => {
    this.setState({ dropdownMenuVisible: !this.state.dropdownMenuVisible });
  };
  render() {
    const { menuInfo } = this.props;

    return (
      <div className="bottom-nav">
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
  }
}

BottomNav.MenuInfoPropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['icon-link', 'icon-dropdown']).isRequired,
    iconImageSrc: PropTypes.string,
    iconRenderer: PropTypes.element,
    targetURL: PropTypes.string,
    dropdownContent: PropTypes.element,
  })),
};

BottomNav.propTypes = PropTypes.shape({
  menuInfo: PropTypes.shape({
    ...BottomNav.MenuInfoPropTypes,
  }).isRequired,
}).isRequired;

export default withModules(BottomNav);
