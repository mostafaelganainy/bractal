import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import dummyData from './dummyProductData';

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
        query.products.map((entry) => {
          const dummyProps = {
            image: dummyData.getRandomImage(),
            oldPrice: dummyData.getRandomOldPrice(),
            ratingCount: dummyData.getRandomRatingCount(),
            rating: dummyData.getRandomRating(),
            doesHaveDiscount: dummyData.getRandomDiscountDecision(),
            discount: dummyData.getRandomDiscount(),
          };
          // eslint-disable-next-line no-underscore-dangle
          return (<Product key={entry.__id} productInfo={entry} dummyProps={dummyProps} />);
        })
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
