import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

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
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        // centerMode: true,
        // centerPadding: '20px',
        arrows: false,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        // centerMode: false,
        arrows: false,
      },
    },
  ],
};

const SliderWrapper = styled.div`
  background-color: #fff;
`;

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

const isValidEntry = productInfo => (
  productInfo.price
);

const ProductsList = ({ query }) => (
  <SliderWrapper>
    <Container>
      <Slider {...settings} style={styles.container}>
        {
          query
          ?
            query.list_products.filter(entry => isValidEntry(entry)).map(entry => (
              // eslint-disable-next-line no-underscore-dangle
              <Product key={entry.__id} productInfo={entry} />
            ))
          :
            ''
          }
      </Slider>
    </Container>
  </SliderWrapper>
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
