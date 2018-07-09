import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Trans, translate } from 'react-i18next';

class NavProductsItems extends Component {
  state = {};
  render() {
    return (
      <div className="products-items">
        <Image
          src="/images/Header/shopping-sad.png"
          srcSet="/images/Header/shopping-sad@2x.png 2x,
             /images/Header/shopping-sad@3x.png 3x"
          inline
          centered
          alt=""
          className="products-items-icon"
        />
        <div className="products-items-details">
          <span className="products-items-count">
            <Trans i18nKey="HeaderProductItems" />
          </span>
          <span className="products-items-price">00.00 QAR</span>
          <span className="items-count">0</span>
        </div>
      </div>
    );
  }
}

export default translate('aykLayout')(NavProductsItems);
