import React from 'react';
import { ThemeProvider } from 'styled-components';
import { translate } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
import Theme from '../Theme';
import EcommerceMainContainer from '../components/EcommerceMainContainer';
import AccountManagementModals from '../../accountManagement/containers/AccountManagementModals';

const Layout = () => (
  <ThemeProvider theme={Theme}>
    <React.Fragment>
      <EcommerceMainContainer>
        <Header />
        <PageContent />
        <Footer />
      </EcommerceMainContainer>
      <AccountManagementModals />
    </React.Fragment>
  </ThemeProvider>
);

/* eslint-disable indent, function-paren-newline */
export default
  translate('eCommerceCore')(
    translate('eCommerceCoreUI')(
      Layout,
    ),
  );
