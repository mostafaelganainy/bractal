import React, { Component } from 'react';
import { Menu, Header, Image } from 'semantic-ui-react';
import { Trans, translate } from 'react-i18next';

class NavLanguageMobile extends Component {
  state = {};
  render() {
    return (
      <div className="menu-language">
        <Header as="h4">
          <Trans i18nKey="HeaderSubMenuLanguage" />
        </Header>

        <Menu.Item className="selected"><Image src="/images/Header/uk.png" avatar />English</Menu.Item>
        <Menu.Item className="ar"><Image src="/images/Header/qr.png" avatar />اللغة العربية</Menu.Item>
      </div>
    );
  }
}

export default translate('aykLayout')(NavLanguageMobile);
