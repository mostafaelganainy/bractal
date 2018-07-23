import React from 'react';
import { ThemeProvider } from 'styled-components';
import { translate } from 'react-i18next';
import Media from 'react-media';

import EcommerceMainContainer from '~/modules/ecommerceCore/components/EcommerceMainContainer';
import AccountManagementModals from '~/modules/accountManagement/containers/AccountManagementModals';
import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import UserInfoProvider from '~/modules/core/utils/accessManagementHelpers/UserInfoProvider';
import ModalTrackerProvider from '~/modules/core/utils/modalHelpers/ModalTrackerProvider';
import { mediaQueryMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import withModalTracker from '~/modules/core/utils/modalHelpers/withModalTracker';

import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
import Theme from '../Theme';

// eslint-disable-next-line react/prop-types
const Root = ({ isTabletOrMobile, isModalOpen }) => {
  const opacity = isModalOpen && isTabletOrMobile ? 0 : 1;
  console.log(`Should show : ${opacity}`);
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
  <ThemeProvider theme={Theme}>
    <EcommerceMainContainer>
      <UserInfoProvider>
        <ModalTrackerProvider>
          <Media query={mediaQueryMax('tablet')} >
            {isTabletOrMobile => (
              <ResponsiveRoot isTabletOrMobile={isTabletOrMobile} />
            )}
          </Media>
          <ModalRoute path="/accountManagement/" component={AccountManagementModals} />
        </ModalTrackerProvider>
      </UserInfoProvider>
    </EcommerceMainContainer>
  </ThemeProvider>
);
/* eslint-disable indent, function-paren-newline */
export default
  translate('eCommerceCore')(
    translate('eCommerceCoreUI')(
      Layout,
    ),
  );
