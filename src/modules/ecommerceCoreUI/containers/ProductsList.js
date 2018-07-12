import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import ProductsSlider from '../components/products/ProductsSlider';

import Product from './Product';


/*
            [{ id: '1', name: 'product name', price: '20' },
            { id: '13', name: 'product name', price: '20' },
            { id: '2', name: 'product name', price: '30' },
            { id: '3', name: 'product name', price: '30' },
            { id: '4', name: 'product name', price: '30' },
            { id: '5', name: 'product name', price: '30' },
            { id: '6', name: 'product name', price: '30' },
            { id: '7', name: 'product name', price: '30' },
            { id: '8', name: 'product name', price: '30' },
            { id: '9', name: 'product name', price: '30' },
            { id: '10', name: 'product name', price: '30' },
            { id: '11', name: 'product name', price: '30' },
            { id: '12', name: 'product name', price: '40' }].map(entry => (
              // eslint-disable-next-line no-underscore-dangle
              <Product key={entry.__id} productInfo={entry} />
            ))
          :
            [{ id: '1', name: 'product name', price: '20' },
            { id: '13', name: 'product name', price: '20' },
            { id: '2', name: 'product name', price: '30' },
            { id: '3', name: 'product name', price: '30' },
            { id: '4', name: 'product name', price: '30' },
            { id: '5', name: 'product name', price: '30' },
            { id: '6', name: 'product name', price: '30' },
            { id: '7', name: 'product name', price: '30' },
            { id: '8', name: 'product name', price: '30' },
            { id: '9', name: 'product name', price: '30' },
            { id: '10', name: 'product name', price: '30' },
            { id: '11', name: 'product name', price: '30' },
            { id: '12', name: 'product name', price: '40' }].map(entry => (
              // eslint-disable-next-line no-underscore-dangle
              <Product key={entry.__id} productInfo={entry} />

            ))
            */

// const isValidEntry = productInfo => (
//   productInfo.price
// );

const ProductsList = ({ query }) => (
  <ProductsSlider>
    {
      query
      ?
        query.list_products.map(entry => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={entry.__id} productInfo={entry} />
        ))
      :
        ''
      }
  </ProductsSlider>
);

ProductsList.propTypes = {
  query: PropTypes.shape({
    list_products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default createFragmentContainer(ProductsList, graphql`
  fragment ProductsList_query on Query {    
    list_products(search: {taxon_ids: [99], hot_deals: true}) {
      ...Product_productInfo,
      price,
    }
  }
`);
