import React from 'react';
import { translate } from 'react-i18next';
import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';
import Brands from '~/modules/ecommerceCoreUI/components/brands/Brands';
import HomeMainSlider from '~/modules/ecommerceCoreUI/components/HomeMainSlider/HomeMainSlider';

const HomePage = () =>
  (
    <React.Fragment>
      <HomeMainSlider />
      <ProductsListPage headerTitle="Most Popular" headerSubtitle="Enjoy our popular products" />
      <ProductsListPage headerTitle="New Arrivals" headerSubtitle="Check our New Arrival Products" />
      <Brands />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
