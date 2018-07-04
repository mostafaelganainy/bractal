import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';
import ProductCard from '../../productsCore/components/productCard/ProductCard';

const PlainProductsListEntry = ({ plainProductInfo }) =>
  <ProductCard productInfo={plainProductInfo} />;

PlainProductsListEntry.propTypes = {
  plainProductInfo: PropTypes.shape({}).isRequired,
};

export default createFragmentContainer(PlainProductsListEntry, graphql`
  fragment PlainProductsListEntry_plainProductInfo on Product {
    id name price
  }
`);
