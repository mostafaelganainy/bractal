import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const AykBody = styled.div`
  background: #f8f7f7 !important;
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
