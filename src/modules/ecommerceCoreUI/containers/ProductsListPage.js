import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import { withRelayEnvironment } from '../../core/utils/relayInitializer';
import Loader from '../components/basic/Loader';

import ProductsList from './ProductsList';

const AllProductsQuery = graphql`
    query ProductsListPageQuery {    
        ...ProductsList_query
    }
`;

const ProductsListPage = ({ environment, MainHeader, SubHeader }) => (
  <QueryRenderer
    environment={environment}
    query={AllProductsQuery}
    render={({ error, props }) => {
      if (error) {
        return <ProductsList MainHeader={MainHeader} SubHeader={SubHeader} />;
        // return <div>{error.message}</div>;
      } else if (props) {
          return <ProductsList MainHeader={MainHeader} SubHeader={SubHeader} query={props} />;
      }
      return <Loader />;
    }}
  />
);

ProductsListPage.propTypes = {
  environment: PropTypes.shape({}).isRequired,
  MainHeader: PropTypes.string.isRequired,
  SubHeader: PropTypes.string.isRequired,
};

export default translate('core')(withRelayEnvironment(ProductsListPage));
