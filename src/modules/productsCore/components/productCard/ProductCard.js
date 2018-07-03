import React from 'react';
import {
  Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '~/modules/core/components/cards/Card';
import RoundIconButton from '~/modules/AykCore/components/buttons/RoundIconButton';
import { Spacer } from '~/modules/core/components/layouts/helpers';
import AykRating from '~/modules/productsCore/components/common/AykRating';
import PriceLabelStriked from '~/modules/productsCore/components/common/PriceLabelStriked';
import PriceLabel from '~/modules/productsCore/components/common/PriceLabel';
import ProductTag from '~/modules/productsCore/components/common/ProductTag';

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

const OfferLabel = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  .offer-label {
    width: 58px;
    height: 50px;
    text-align: center;
    border: 1px solid #e1e1e1;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 5px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
    padding: 10px;
    line-height: 1.1;
  }
  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
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
    <ProductTag offerType={offerType}>
      <span>discount {Math.floor(dummyProps.discount * 100)}</span>%
    </ProductTag>
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
            <AykRating rating={dummyProps.rating} ratingCount={dummyProps.ratingCount} />
          </React.Fragment>
        }
        footerLeftRenderer={
          <div>
            <PriceLabelStriked>
              { originalPrice }
            </PriceLabelStriked>
            <PriceLabel>
              { currentPrice }
            </PriceLabel>
          </div>
        }
        footerRightRenderer={
          <OfferLabel>
            <div className="offer-label">
              buy 2X
            </div>
            <span>Free Shipping</span>
          </OfferLabel>
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
