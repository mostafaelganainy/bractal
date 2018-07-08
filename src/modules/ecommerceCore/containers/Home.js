import React from 'react';
import { translate } from 'react-i18next';
import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';

const HomePage = () =>
  (
    <React.Fragment>
      <ProductsListPage MainHeader="most popular" SubHeader="Enjoy our popular products" />
      <ProductsListPage MainHeader="new arrivals" SubHeader="Check our New Arrival Products" />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
