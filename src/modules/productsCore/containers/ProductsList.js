import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
};

const ProductsList = ({ query }) => (
  <div style={styles.container}>
    {
      query ?
        query.list_products.map(entry => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={entry.__id} productInfo={entry} />
        ))
      :
        [{ id: '1', name: 'product name', price: '20' }, { id: '2', name: 'product name', price: '30' }, { id: '3', name: 'product name', price: '40' }].map(entry => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={entry.__id} productInfo={entry} />
        ))
    }
  </div>
);

ProductsList.propTypes = {
  query: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default createFragmentContainer(ProductsList, graphql`
  fragment ProductsList_query on Query {    
    list_products(taxon_id: 99) {
      ...Product_productInfo
    }
  }
`);
