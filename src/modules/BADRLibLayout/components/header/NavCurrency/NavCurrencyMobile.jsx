import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Trans, translate } from 'react-i18next';
import PropTypes from 'prop-types';

const NavCurrencyMobile = ({ currency }) => (
  <div className="menu-currency">
    <Header as="h4">
      <Trans i18nKey="HeaderSubMenuCurrency" />
    </Header>
    <Menu.Item className="selected">{currency[0].text}</Menu.Item>
    <Menu.Item>{currency[1].text}</Menu.Item>
  </div>
);

NavCurrencyMobile.propTypes = {
  // eslint-disable-next-line function-paren-newline
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
};

export default translate('aykLayout')(NavCurrencyMobile);
