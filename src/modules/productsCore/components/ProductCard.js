import React from 'react';
import {
  Header,
  Segment,
  Grid,
  Label,
  Rating,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import dummyData from './dummyProductData';


const styles = {
  card: {
    // width: '290px',
    margin: '1em',
  },
  card_tag_container: {
    height: '37px',
  },
  card_image: {
    // marginTop: '3.5em',
    // marginBottom: '2em',
    // height: '150px',
  },
  card_header: {
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontSize: '1em',
  },
  card_ratings_count: {
    fontSize: '0.8em',
    verticalAlign: 'top',
    fontWeight: 'bold',
  },
  card_original_price: {
    fontSize: '1.2em',
    color: 'rgba(119, 119, 119, 0.4)',
    marginTop: '0.3em',
    height: '1.1em',
    background: 'rgba(255, 255, 255, 1)',
  },
  card_current_price: {
    fontSize: '1.2em',
    color: '#00b0e4',
    marginTop: '0.4em',
  },
  card_more_details_button: {
    padding: '0.55em',
    width: '130px',
    fontSize: '1.0em',
    marginTop: '0.5em',
  },
};

const generateDummyProps = () => (
  {
    image: dummyData.getRandomImage(),
    oldPrice: dummyData.getRandomOldPrice(),
    ratingCount: dummyData.getRandomRatingCount(),
    rating: dummyData.getRandomRating(),
    doesHaveDiscount: dummyData.getRandomDiscountDecision(),
    discount: dummyData.getRandomDiscount(),
  }
);

const ProductCard = ({ productInfo }) => {
  const dummyProps = generateDummyProps();

  return (
    <Segment style={styles.card} className="product-card">
      <div style={styles.card_tag_container}>
        {dummyProps.doesHaveDiscount
            ? (
              <Label style={styles.card_tag} className="offer" tag>
                <span>{Math.floor(dummyProps.discount * 100)}</span>% Off
              </Label>
            )
            : ' '
        }
        <div className="assets">
          <div><i className="icon-compare" /></div>
          <div><i className="icon-heart-1" /></div>
        </div>
      </div>
      <div className="img-preview">
        <img
          style={styles.card_image}
          src={dummyProps.image}
          alt=""
        />
      </div>
      {/* <Label horizontal>Mobile Shop</Label> */}
      <Header style={styles.card_header} size="small">
        {productInfo.name}
      </Header>
      <Grid.Row>
        <Rating
          style={styles.card_rating}
          maxRating={5}
          defaultRating={dummyProps.rating}
          icon="star"
          size="small"
          disabled
        />
        <span style={styles.card_ratings_count}> ({dummyProps.ratingCount})</span>
      </Grid.Row>
      <div style={styles.card_original_price}>
        <b>
          <strike className="discount">
            {dummyProps.doesHaveDiscount
              ? `${(parseFloat(productInfo.price) / (1 - dummyProps.discount)).toFixed(2)} QAR`
              : ' '
            }
          </strike>
        </b>
      </div>
      <Grid.Row>
        <Label style={styles.card_current_price} className="product-card-price">
          <b>{productInfo.price} QAR</b>
        </Label>
      </Grid.Row>
    </Segment>
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
