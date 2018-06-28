import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';

class NavProductsItems extends Component {
  state = {};
  render() {
    return (
      <div className="products-items">
        <i className="icon-shopping-sad products-items-icon" />
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