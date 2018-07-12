/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  XXLargeLabel,
  // XLargeLabel,
  LargeLabel,
  MediumLabel,
  SmallLabel,
  XSmallLabel,
} from '~/modules/coreUI/components/basic/Labels';

import {
  MinorDetailsLabel,
  ImportantMinorDetailsLabel,
} from '~/modules/ecommerceCoreUI/components/basic/Labels';

// --------------------- OFFERS ---------------------//
export const OfferCountDownTimerLabel = styled(XXLargeLabel)`
  color: ${props => props.theme.colors.labels.important};
  font-weight: bold;
`;

export const OfferCountDownTimerDetails = MinorDetailsLabel;

export const OfferRemainingAvailabilityLabel = styled(ImportantMinorDetailsLabel)`
  font-weight: bold;
`;

export const ProductCardOfferHintLabel = MinorDetailsLabel;

export const OfferTagLabel = styled(SmallLabel)`
  color: ${props => props.theme.colors.named.white};
`;

// ------------------- RATINGS ---------------------//
export const RatingsCountLabel = styled(ImportantMinorDetailsLabel)`
  font-weight: bold;
  vertical-align: top; 
  margin-top: 3px;
  margin-left: 3px;
`;

// ----------------- ProductInfo -------------------//
export const ProductNameLabel = styled(LargeLabel)`
  color: ${props => props.theme.colors.labels.important};
`;

export const ReviewsCountLabel = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.important};
`;

export const OldPriceLabel = styled(MediumLabel)`
  color: ${props => props.theme.colors.labels.subtle};
  text-decoration: line-through;
  margin-top: 15px;
`;

export const CurrentPriceLabel = styled(LargeLabel)`
  font-size: ${props => props.theme.fonts.sizes.large * 1.15};
  color: ${props => props.theme.colors.primary};
`;
