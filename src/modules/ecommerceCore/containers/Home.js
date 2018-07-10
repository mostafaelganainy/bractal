import React from 'react';
import { translate } from 'react-i18next';
import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';
import SideMenu from '~/modules/ecommerceCoreUI/components/header/sideMenu/SideMenu';

const HomePage = () =>
  (
    <React.Fragment>
      <div style={{ width: '300px', position: 'absolute' }}>
        <SideMenu />
      </div>
      <ProductsListPage headerTitle="Most Popular" headerSubtitle="Enjoy our popular products" />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
