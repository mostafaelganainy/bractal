import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import PageContent from './PageContent';
import Theme from './Theme';

const AykMainContainer = styled.div`
  background: #f8f7f7 !important;

  &&& .container {
    width: 1366px;
  }
  
  /* '' */
  @font-face {
    font-family: Panton;
    src: url("fonts/Panton/Panton-Regular.otf"); 
  }

  @font-face {
    font-family: Frutiger;
    src: url("fonts/FrutigerLTArabic/FrutigerLTArabic-55Roman.ttf"); 
  }

  body,
  .ui.menu,
  .ui.header,
  button,
  input,
  optgroup,
  select,
  textarea,
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Panton, sans-serif; 
  }

  .ar {
    font-family: Frutiger, sans-serif; 
  }

`;

const Layout = () => (
  <ThemeProvider theme={Theme}>
    <AykMainContainer>
      <Header />
      <PageContent />
    </AykMainContainer>
  </ThemeProvider>
);

export default Layout;
