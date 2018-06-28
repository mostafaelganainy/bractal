import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import { withRelayEnvironment } from '../../core/utils/relayInitializer';

import ProductsList from './ProductsList';

const AllProductsQuery = graphql`
    query ProductsListPageQuery {    
        ...ProductsList_query
    }
`;

const ProductsListPage = ({ environment }) => (
  <QueryRenderer
    environment={environment}
    query={AllProductsQuery}
    render={({ error, props }) => {
      if (error) {
        return <ProductsList />; // return <div>{error.message}</div>;
      } else if (props) {
          return <ProductsList query={props} />;
      }
      return <div>Loading</div>;
    }}
  />
);

ProductsListPage.propTypes = {
  environment: PropTypes.shape({}).isRequired,
};

export default translate('core')(withRelayEnvironment(ProductsListPage));
