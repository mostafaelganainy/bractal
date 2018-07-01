import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';

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
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  variableWidth: true,
};
const ProductsList = ({ query }) => (
  <Container>
    <Slider {...settings} style={styles.container}>
      {
        query ?
          /* query.list_products.map(entry => (
            // eslint-disable-next-line no-underscore-dangle
            <Product key={entry.__id} productInfo={entry} />
          )) */
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
        }
    </Slider>
  </Container>
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
