import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

const Product = ({ productInfo }) => (
  <ProductCard productInfo={productInfo} />
);

Product.propTypes = {
  productInfo: PropTypes.shape({}).isRequired,
};

export default createFragmentContainer(Product, graphql`
  fragment Product_productInfo on Product {
    id
    name
    price
  }
`);
