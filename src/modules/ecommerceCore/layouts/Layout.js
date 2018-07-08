import React from 'react';
import { ThemeProvider } from 'styled-components';
import { translate } from 'react-i18next';
import Header from './Header';
import PageContent from './PageContent';
import Theme from '../Theme';
import EcommerceMainContainer from '../components/EcommerceMainContainer';

const Layout = () => (
  <ThemeProvider theme={Theme}>
    <EcommerceMainContainer>
      <Header />
      <PageContent />
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
