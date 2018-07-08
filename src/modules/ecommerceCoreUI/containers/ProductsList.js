import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container, Header } from 'semantic-ui-react';
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

const Heading = styled.div`
  h2.ui.header,
  h3.ui.header{
    text-align:center;
    margin: 0;
  }
  h2.ui.header {
    font-size: 36px;
    text-transform: uppercase;
    color: #33a8ff;
    padding-top: 39px;
  }
  h3.ui.header{
    font-size:18px;
    color:#a7a9ac;
    font-weight:300;
  }
  @media (max-width:1024px){
    h2.ui.header {
      font-size: 30px;
    }
    h3.ui.header {
      font-size: 15px;
    }
  }
`;
const SliderWrapper = styled.div`
  background-color: #fff;
`;

const ProductsList = ({ query, MainHeader, SubHeader }) => (
  <SliderWrapper>
    <Container>
      <Heading>
        <Header as="h2">{MainHeader}</Header>
        <Header as="h3">{SubHeader}</Header>
      </Heading>
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
  </SliderWrapper>
);

ProductsList.propTypes = {
  query: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  MainHeader: PropTypes.string.isRequired,
  SubHeader: PropTypes.string.isRequired,
};

export default createFragmentContainer(ProductsList, graphql`
  fragment ProductsList_query on Query {    
    list_products(search: {taxon_ids: [99], hot_deals: true}) {
      ...Product_productInfo
    }
  }
`);
