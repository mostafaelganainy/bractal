import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPriceLabel = styled.div`
  color: #00b0e4;
  margin-top: 9px;
  background: transparent;
  font-size: 20px;
  padding: 0;
`;

const PriceLabel = ({ children }) => (
  <StyledPriceLabel >
    <b>
      {children}
    </b>
  </StyledPriceLabel>
);

PriceLabel.propTypes = PropTypes.shape({
  children: PropTypes.element.isRequired,
}).isRequired;

export default PriceLabel;
