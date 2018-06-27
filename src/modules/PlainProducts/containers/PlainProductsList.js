import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';

import PlainProductsListEntry from './PlainProductsListEntry';

const PlainProductsList = ({ query }) => (
  <Container >
    <Segment >
      {
        query ?
          query.products.map(entry => (
            // eslint-disable-next-line no-underscore-dangle
            <PlainProductsListEntry key={entry.__id} plainProductInfo={entry} />
          ))
        :
          'Loading...'
      }
    </Segment>
  </Container>
);

PlainProductsList.propTypes = {
  query: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default createFragmentContainer(PlainProductsList, graphql`
  fragment PlainProductsList_query on Query {    
    products {
      ...PlainProductsListEntry_plainProductInfo
    }
  }
`);
