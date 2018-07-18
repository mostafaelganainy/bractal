import React from 'react';
import { ThemeProvider } from 'styled-components';
import { translate } from 'react-i18next';
import EcommerceMainContainer from '~/modules/ecommerceCore/components/EcommerceMainContainer';
import AccountManagementModals from '~/modules/accountManagement/containers/AccountManagementModals';
import ModalRoute from '~/modules/core/components/Modal/ModalRoute';
import UserInfoProvider from '~/modules/core/utils/accessManagementHelpers/UserInfoProvider';

import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
import Theme from '../Theme';

const Layout = () => (
  <ThemeProvider theme={Theme}>
    <EcommerceMainContainer>
      <UserInfoProvider>
        <Header />
        <PageContent />
        <Footer />
        <ModalRoute path="/accountManagement/" component={AccountManagementModals} />
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
