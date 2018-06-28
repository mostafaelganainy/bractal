
import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import DropdownMenu from './Departments/DepartmentsTab';
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
    const { dropdownMenuVisible } = this.state;
    const { menuInfo } = this.props;

    return (
      <div className="nav-department">
        <Container>
          <Menu>
            {menuInfo.items.filter(item => !item.position || item.position !== 'right').map(item => (
              <MenuItemRenderer itemInfo={item} />
            ))}
            <Menu.Menu position="right">
              {menuInfo.items.filter(item => item.position === 'right').map(item => (
                <MenuItemRenderer itemInfo={item} />
              ))}
            </Menu.Menu>
          </Menu>
          {/*
          const { modules } = this.props;
          const featuredDepartmentsList = modules.map(module => (
            <Menu.Item header key={module.name} as={NavLink} exact to={module.homePath}>
              {module.menuItemTitle}
            </Menu.Item>
          ));
          <Menu>
            <DropDownBurger handleClick={this.handleClick} />

            <Menu.Menu className="featured-departments">
              {featuredDepartmentsList}

              {featuredDepartmentsList.length > 5 && (
                <Menu.Item className="more">
                  <Image src="images/Header/more.png" />
                </Menu.Item>
              )}
            </Menu.Menu>
          </Menu>
          */}
          { dropdownMenuVisible ? <DropdownMenu /> : null }
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
