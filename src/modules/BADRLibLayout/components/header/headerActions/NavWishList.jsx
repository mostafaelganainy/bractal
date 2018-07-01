import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class NavWishList extends Component {
  state = {};
  render() {
    return (
      <div className="products-wishlist">
        <Image
          src="images/Header/heart.png"
          srcSet="images/Header/heart@2x.png 2x,
     images/Header/heart@3x.png 3x"
        />
      </div>
    );
  }
}
