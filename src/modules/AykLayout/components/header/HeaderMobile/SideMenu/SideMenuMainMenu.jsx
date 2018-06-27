import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Trans, translate } from 'react-i18next';

class SideMenuMainMenu extends Component {
  state = {};
  render() {
    return (
      <div className="main-assets">
        <Menu.Item>
          <Trans i18nKey="homeTitle" />
        </Menu.Item>
        <Menu.Item>
          <Trans i18nKey="HeaderTrackOrders" />
        </Menu.Item>
        <Menu.Item>
          <Trans i18nKey="HeaderAccount" />
        </Menu.Item>
        <Menu.Item>
          <Trans i18nKey="HeaderSupport" />
        </Menu.Item>
        <Menu.Item>
          <Trans i18nKey="HeaderPrize" />
        </Menu.Item>
      </div>
    );
  }
}

export default translate('aykLayout')(SideMenuMainMenu);
