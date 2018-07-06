import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

import { Label } from 'semantic-ui-react';

import { OfferTagLabel } from './ProductLabels';

const colors = {
  hotOffer: '#fd464b',
  haveDiscount: '#65b3c1',
  offer: '#2adf1c',
};

const StyledTag = styled(Label)`
  &&& {
    height: 30px;
    line-height: 17px;
    display: inline-block;
    background-color: ${props => props.backgroundColor};
    
    border-radius: 0;
    margin-left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    margin-top: 7px;
    text-transform: capitalize;

    &:after {
      box-shadow: none;
    }

    &:before {
      width: 20px;
      height: 20px;
      right: 0;
    }

    span:after {
      content: "";
      border: 1px dashed #f5f5f5;
      left: 6px;
      position: absolute;
      height: 100%;
      top: 0;
      opacity: 0.75;
    }
  }
`;

const ProductTag = ({ offerType, children }) => (
  <StyledTag backgroundColor={colors[offerType]} tag>
    <OfferTagLabel>
      {children}
    </OfferTagLabel>
  </StyledTag>
);

ProductTag.propTypes = PropType.shape({
  offerType: PropType.oneOf(['hotOffer', 'haveDiscount', 'offer']).isRequired,
  children: PropType.element.isRequired,
}).isRequired;

export default ProductTag;
