import React from 'react';
import { translate } from 'react-i18next';
import Media from 'react-media';

import EcommerceMainContainer from '~/modules/ecommerceCore/components/EcommerceMainContainer';
import AccountManagementModals from '~/modules/accountManagement/containers/AccountManagementModals';
import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import withModalTracker from '~/modules/core/utils/modalHelpers/withModalTracker';

import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';

// eslint-disable-next-line react/prop-types
const Root = ({ isTabletOrMobile, isModalOpen }) => {
  const opacity = isModalOpen && isTabletOrMobile ? 0 : 1;

  return (
    <div style={{ opacity }}>
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
};

const ResponsiveRoot = withModalTracker(Root);

const Layout = () => (
  <EcommerceMainContainer>
    <Media query={mediaQueryMax('tablet')} >
      {isTabletOrMobile => (
        <ResponsiveRoot isTabletOrMobile={isTabletOrMobile} />
      )}
    </Media>
    <ModalRoute path="/accountManagement/" component={AccountManagementModals} />
  </EcommerceMainContainer>
);
/* eslint-disable indent, function-paren-newline */
export default
  translate('eCommerceCore')(
    translate('eCommerceCoreUI')(
      Layout,
    ),
  );
