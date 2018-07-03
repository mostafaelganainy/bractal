import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OfferLabelItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  .offer-label {
    width: 58px;
    height: 50px;
    text-align: center;
    border: 1px solid #e1e1e1;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 5px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
    padding: 10px;
    line-height: 1.1;
    display: flex;
    img{
      max-width:100%;
    }
  }
  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }
`;
const OfferLabel = ({ text, offer }) => (
  <OfferLabelItem>
    <div className="offer-label">{offer}</div>
    <span>{text}</span>
  </OfferLabelItem>
);

OfferLabel.propTypes = PropTypes.shape({
  text: PropTypes.string.isRequired,
  offer: PropTypes.element.isRequired,
}).isRequired;

export default OfferLabel;
