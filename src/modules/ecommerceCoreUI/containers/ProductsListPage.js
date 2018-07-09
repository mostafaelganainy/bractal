import React from 'react';
import PropTypes from 'prop-types';
import {
  graphql,
} from 'react-relay';

import withRootQuery from '~/modules/core/utils/relayHelpers/withRootQuery';
import {
  SectionHeader,
  SectionHeaderSubtitle,
} from '~/modules/ecommerceCoreUI/components/basic/Labels';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { XLargeSpacer, XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import ProductsList from './ProductsList';

const ProductsListPage = ({ headerTitle, headerSubtitle, queryResult }) => (
  <CenterAlignedColumn>
    <XLargeSpacer />
    <XLargeSpacer />
    <SectionHeader>{headerTitle}</SectionHeader>
    <SectionHeaderSubtitle>{headerSubtitle}</SectionHeaderSubtitle>
    <XXLargeSpacer />
    <ProductsList query={queryResult} />
  </CenterAlignedColumn>
);

ProductsListPage.propTypes = {
  queryResult: PropTypes.shape({}).isRequired,
  headerTitle: PropTypes.string.isRequired,
  headerSubtitle: PropTypes.string.isRequired,
};

/* eslint-disable function-paren-newline */
export default withRootQuery(
  ProductsListPage,
  graphql`
    query ProductsListPageQuery {    
        ...ProductsList_query
    }
  `,
);
