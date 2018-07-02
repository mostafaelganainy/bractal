import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Rating } from 'semantic-ui-react';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px !important;
`;

const RatingCount = styled.div`
  font-size: 13px;
  vertical-align: top;
  font-weight: bold;  
  margin-top: 3px;
  margin-left: 3px;
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
    <RatingCount> ({ratingCount}) </RatingCount>
  </RatingContainer>
);

AykRating.propTypes = PropTypes.shape({
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
}).isRequired;

export default AykRating;
