import React from 'react';
import PropTypes from 'prop-types';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import { Container } from 'semantic-ui-react';

import { withRelayEnvironment } from '../../core/utils/relayInitializer';

import PlainProductsList from './PlainProductsList';

const PlainProductsListPageQuery = graphql`
    query PlainProductsListPageQuery {  
      ...PlainProductsList_query
    }
`;

const PlainProductsListPage = ({ environment }) => (
  <QueryRenderer
    environment={environment}
    // eslint-disable-next-line react/jsx-curly-spacing
    query={ PlainProductsListPageQuery }
    render={({ error, props }) => {
      // eslint-disable-next-line react/prop-types
      const queryRoot = props;
      if (error) {
          return <Container>{error.message}</Container>;
      } else if (props) {
          return <PlainProductsList query={queryRoot} />;
      }
      return <Container>Loading ...</Container>;
    }}
  />
);

PlainProductsListPage.propTypes = {
  environment: PropTypes.shape({}).isRequired,
};

export default withRelayEnvironment(PlainProductsListPage);
