import React from 'react';
import { translate } from 'react-i18next';
import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';
import SideMenu from '~/modules/ecommerceCoreUI/components/header/sideMenu/SideMenu';
import Brands from '~/modules/ecommerceCoreUI/components/brands/Brands';

const HomePage = () =>
  (
    <React.Fragment>
      <div style={{ width: '300px' }}>
        <SideMenu />
      </div>
      <ProductsListPage headerTitle="Most Popular" headerSubtitle="Enjoy our popular products" />
      <ProductsListPage headerTitle="New Arrivals" headerSubtitle="Check our New Arrival Products" />
      <Brands />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
