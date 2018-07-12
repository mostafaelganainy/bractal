import React from 'react';
import {
  Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '~/modules/coreUI/components/items/Card';
import { Spacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import RoundIconButton from '~/modules/AykCore/components/buttons/RoundIconButton';
import {
  OldPriceLabel,
  CurrentPriceLabel,
  ProductCardOfferHintLabel,
} from './basic/ProductLabels';

import Rating from './basic/Rating';
import OfferTag from './offers/OfferTag';

import dummyData from '../dummyProductData';

const CardActionsContainer = styled.div`
  display: flex;
`;

const CardContentHeader = styled(Header)`
  &&& {
    margin-top: 0.625em;
    margin-bottom: 0.625em;
    font-size: 18px;
  }
`;

const generateDummyProps = () => (
  {
    image: dummyData.getRandomImage(),
    ratingCount: dummyData.getRandomRatingCount(),
    rating: dummyData.getRandomRating(),
    doesHaveDiscount: dummyData.getRandomDiscountDecision(),
    discount: dummyData.getRandomDiscount(),
    offerType: dummyData.getRandomOfferType(),
  }
);

const renderProductTag = (dummyProps) => {
  const { offerType, doesHaveDiscount } = dummyProps;

  if (!doesHaveDiscount) return <div />;

  return (
    <OfferTag offerType={offerType}>
      <span>discount {Math.floor(dummyProps.discount * 100)}</span>%
    </OfferTag>
  );
};

const ProductCard = ({ productInfo }) => {
  const dummyProps = generateDummyProps();
  dummyProps.oldPrice = (parseFloat(productInfo.price) / (1 - dummyProps.discount)).toFixed(2);
  const originalPrice = dummyProps.doesHaveDiscount ? `${dummyProps.oldPrice} QAR` : ' ';
  const currentPrice = `${productInfo.price} QAR`;

  return (
    <div>
      <Card
        productInfo={productInfo}
        headerLeftRenderer={
          renderProductTag(dummyProps)
        }
        headerRightRenderer={
          <CardActionsContainer className="assets">
            <RoundIconButton color="#fb9410" iconName="icon-compare" />
            <Spacer size={10} />
            <RoundIconButton color="#fb9410" iconName="icon-heart-1" />
          </CardActionsContainer>
        }
        imageRenderer={
          <img src={dummyProps.image} alt="" />
        }
        contentSectionRenderer={
          <React.Fragment>
            <CardContentHeader size="small">
              {productInfo.name}
            </CardContentHeader>
            <Rating rating={dummyProps.rating} ratingCount={dummyProps.ratingCount} />
          </React.Fragment>
        }
        footerLeftRenderer={
          <React.Fragment>
            <OldPriceLabel>
              { originalPrice }
            </OldPriceLabel>
            <CurrentPriceLabel>
              { currentPrice }
            </CurrentPriceLabel>
          </React.Fragment>
        }
        footerRightRenderer={
          <React.Fragment>
            {/* <OfferLabel
            text="Free Shipping"
            offer={<img src="https://images-na.ssl-images-amazon.com/images/I/41nWLrWJRrL.__AC_SY400_.jpg" alt="" />}
            /> */}
            <ProductCardOfferHintLabel
              text="Free Shipping"
              offer="buy 2x"
            />
          </React.Fragment>
        }
      />
    </div>
  );
};

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
