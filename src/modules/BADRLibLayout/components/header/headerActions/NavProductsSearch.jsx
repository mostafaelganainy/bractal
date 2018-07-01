import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import i18next from 'i18next';
import PropTypes from 'prop-types';

const NavProductsSearch = ({ products }) => (
  <div className="products-search">
    <Dropdown
      text={i18next.t('aykLayout:header.allProducts')}
      pointing
      icon="chevron down"
      options={products}
    />
    <Input
      action={{ icon: 'search' }}
      placeholder={i18next.t('aykLayout:header.search')}
    />
  </div>
);

NavProductsSearch.propTypes = {
  // eslint-disable-next-line function-paren-newline
  products: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
};

export default NavProductsSearch;
