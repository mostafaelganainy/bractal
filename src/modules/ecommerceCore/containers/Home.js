import React from 'react';
import { translate } from 'react-i18next';
import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';

const HomePage = () =>
  (
    <React.Fragment>
      <ProductsListPage headerTitle="Most Popular" headerSubtitle="Enjoy our popular products" />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
