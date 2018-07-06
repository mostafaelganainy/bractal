import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Rating } from 'semantic-ui-react';

import { RatingsCountLabel } from './ProductLabels';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px !important;
  .ui.small.rating{
    font-size: 16px;
  }
`;

const AykRating = ({ rating, ratingCount }) => (
  <RatingContainer>
    <Rating
      maxRating={5}
      defaultRating={rating}
      icon="star"
      size="small"
      disabled
    />
    <RatingsCountLabel> ({ratingCount}) </RatingsCountLabel>
  </RatingContainer>
);

AykRating.propTypes = PropTypes.shape({
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
}).isRequired;

export default AykRating;
