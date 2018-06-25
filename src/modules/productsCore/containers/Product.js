import React from 'react';
import {
  Button,
  Header,
  Segment,
  Grid,
  Image,
  Label,
  Rating,
} from 'semantic-ui-react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';


const styles = {
  card: {
    width: '290px',
    margin: '1em',
  },
  card_tag_container: {
    height: '2em',
  },
  card_image: {
    'margin-top': '3.5em',
    'margin-bottom': '2em',
    height: '150px',
  },
  card_header: {
    'margin-top': '0.5em',
    'margin-bottom': '0.5em',
  },
  card_ratings_count: {
    'font-size': '0.8em',
    'vertical-align': 'top',
    'font-weight': 'bold',
  },
  card_original_price: {
    'font-size': '1.2em',
    color: 'rgba(119, 119, 119, 0.4)',
    'margin-top': '0.3em',
    height: '1.1em',
  },
  card_current_price: {
    'font-size': '1.2em',
    color: '#00b0e4',
    'margin-top': '0.4em',
    padding: '0.4em 0.9em',
  },
  card_more_details_button: {
    padding: '0.55em',
    width: '130px',
    'font-size': '1.0em',
    'margin-top': '0.5em',
  },
};

const Product = ({ productInfo, dummyProps }) => (
  <Segment style={styles.card}>
    <div style={styles.card_tag_container}>
      {dummyProps.doesHaveDiscount
          ? (
            <Label style={styles.card_tag} as="a" color="red" ribbon >
              {Math.floor(dummyProps.discount * 100)}% Off
            </Label>
          )
          : ' '
      }
    </div>
    <Image
      style={styles.card_image}
      src={dummyProps.image}
      centered
    />
    <Label horizontal>Mobile Shop</Label>
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
        <strike>
          {dummyProps.doesHaveDiscount
            ? `${(parseFloat(productInfo.price) / (1 - dummyProps.discount)).toFixed(2)} QAR`
            : ' '
          }
        </strike>
      </b>
    </div>
    <Grid.Row>
      <Label style={styles.card_current_price}>
        <b>{productInfo.price} QAR</b>
      </Label>
      <Button
        style={styles.card_more_details_button}
        floated="right"
        color="orange"
      >
        More Details
      </Button>
    </Grid.Row>
  </Segment>
);

Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  dummyProps: PropTypes.shape({}).isRequired,
};

export default createFragmentContainer(Product, graphql`
  fragment Product_productInfo on Products {
    id
    name
    price
  }
`);
