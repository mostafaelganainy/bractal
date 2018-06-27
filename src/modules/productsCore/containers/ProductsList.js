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
        query.products.map(entry => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={entry.__id} productInfo={entry} />
        ))
      :
        ''
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
    products {
      ...Product_productInfo
    }
  }
`);
