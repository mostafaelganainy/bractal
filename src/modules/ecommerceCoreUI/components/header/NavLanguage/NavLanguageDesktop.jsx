import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import { I18n } from 'react-i18next';

export default class NavLanguageDesktop extends Component {
  state = {};
  render() {
    const trigger = (
      <span>
        <Image avatar src="images/Header/uk.png" /> EN
      </span>
    );

    return (
      <I18n>
        {(t, { i18n }) => (
          <Dropdown
            trigger={trigger}
            pointing="top right"
            icon="chevron down"
            className="set-language"
          >
            <Dropdown.Menu>
              <Dropdown.Item
                active
                onClick={() => i18n.changeLanguage('en')}
              >
                <Image src="images/Header/en.png" /> EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => i18n.changeLanguage('ar')}>
                <Image src="images/Header/ar.png" /> AR
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </I18n>
    );
  }
}
