import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import LanguageSelector from '../../components/common/LanguageSelector';

class DesktopMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu >
        <Menu.Item header>
          <Trans i18nKey="metadata.appName" />
        </Menu.Item>
        <Menu.Item header as={NavLink} exact to="/">
          <Trans i18nKey="home.menuTitle" />
        </Menu.Item>
        <Menu.Item header as={NavLink} exact to="/account">
          <Trans i18nKey="home.menuTitle" />
        </Menu.Item>
        <Menu.Item header as={NavLink} exact to="/products">
          <Trans i18nKey="home.menuTitle" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <LanguageSelector />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu> 
    );
  }
}

export default translate('core')(DesktopMenu);
