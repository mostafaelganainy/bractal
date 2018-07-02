import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GrayLabel = styled.div`
  color: rgba(119, 119, 119, 0.4);
  font-size: 16px;
  height: 1.1em;
`;

const PriceLabelStriked = ({ children }) => (
  <GrayLabel>
    <b><strike> {children} </strike></b>
  </GrayLabel>
);

PriceLabelStriked.propTypes = PropTypes.shape({
  children: PropTypes.element.isRequired,
}).isRequired;

export default PriceLabelStriked;
