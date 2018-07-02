import React from 'react';
import {
  Label,
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

import dummyData from '../dummyProductData';

const CardActionsContainer = styled.div`
  display: flex;
`;

const CardContentHeader = styled(Header)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 14px;
`;

const generateDummyProps = () => (
  {
    image: dummyData.getRandomImage(),
    ratingCount: dummyData.getRandomRatingCount(),
    rating: dummyData.getRandomRating(),
    doesHaveDiscount: dummyData.getRandomDiscountDecision(),
    discount: dummyData.getRandomDiscount(),
  }
);

const ProductCard = ({ productInfo }) => {
  const dummyProps = generateDummyProps();
  dummyProps.oldPrice = (parseFloat(productInfo.price) / (1 - dummyProps.discount)).toFixed(2);
  const originalPrice = dummyProps.doesHaveDiscount ? `${dummyProps.oldPrice} QAR` : ' ';
  const currentPrice = `${productInfo.price} QAR`;

  return (
    <React.Fragment>
      <Card
        productInfo={productInfo}
        headerLeftRenderer={
          <Label className="have-discount" tag>
            discount <span>{Math.floor(dummyProps.discount * 100)}</span>%
          </Label>
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
          null
        }
      />
    </React.Fragment>
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
