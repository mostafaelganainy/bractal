import React from 'react';
import { translate } from 'react-i18next';
import Media from 'react-media';
// import ProductsListPage from '~/modules/ecommerceCoreUI/containers/ProductsListPage';
import Brands from '~/modules/ecommerceCoreUI/components/brands/Brands';
import HomeMainSlider from '~/modules/ecommerceCoreUI/components/HomeMainSlider/HomeMainSlider';
import SideMenu from '~/modules/ecommerceCoreUI/components/header/sideMenu';
import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';

const HomePage = () =>
  (
    <React.Fragment>
      <HomeMainSlider />
      <Media
        query={mediaQueryMax('tablet')}
        render={() =>
          <SideMenu />
        }
      />
      {/* <ProductsListPage headerTitle="Most Popular"
      headerSubtitle="Enjoy our popular products" /> */}
      {/* <ProductsListPage headerTitle="New Arrivals"
      headerSubtitle="Check our New Arrival Products" /> */}
      <Brands />
    </React.Fragment>
  );

export default translate('aykLayout')(HomePage);
