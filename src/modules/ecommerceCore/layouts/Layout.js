import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import PageContent from './PageContent';
import Theme from './Theme';
import EcommerceMainContainer from '../components/EcommerceMainContainer';

const Layout = () => (
  <ThemeProvider theme={Theme}>
    <EcommerceMainContainer>
      <Header />
      <PageContent />
    </EcommerceMainContainer>
  </ThemeProvider>
);

export default Layout;
