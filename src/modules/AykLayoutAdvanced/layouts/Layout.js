import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const AykBody = styled.div`
  background: #f8f7f7 !important;
  
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

const Layout = ({ content }) => (
  <AykBody>
    <Header />
    { content }
  </AykBody>
);

Layout.propTypes = PropTypes.shape({
  content: PropTypes.element.isRequired,
}).isRequired;

export default Layout;
