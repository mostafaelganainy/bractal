import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import {
  graphql,
} from 'react-relay';

import withRootQuery from '~/modules/core/utils/relayHelpers/withRootQuery';

import BrandsSlider from './BrandsSlider';

const BrandsSliderItems = styled.div`
  img {
    width: 50% !important;
  }
`;

const Brands = ({ queryResult }) => (
  <BrandsSliderItems>
    <XXLargeSpacer />
    <BrandsSlider>
      {queryResult && queryResult.list_brands.map(brand => (
        <img key={brand.id} src={brand.logo_url} alt={brand.logo_url} />
      ))}
    </BrandsSlider>
    <XXLargeSpacer />
  </BrandsSliderItems>
);

Brands.propTypes = {
  queryResult: PropTypes.shape({}).isRequired,
};

/* eslint-disable function-paren-newline */
export default withRootQuery(
  Brands,
  graphql`
    query BrandsQuery {    
      list_brands {
        id
        logo_url
      }
    }
  `,
);
