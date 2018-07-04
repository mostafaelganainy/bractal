import React, { Component } from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';


import NavProductsSearch from '../Common/NavProductsSearch';
import NavCurrency from '../Common/NavCurrency';
import NavProductsItems from '../Common/NavProductsItems';
import NavWishList from '../Common/NavWishList';
import NavNotification from '../Common/NavNotification';
import NavLanguage from '../Common/NavLanguage';
import NavUserProfile from '../Common/NavUserProfile';

export default class TopNav extends Component {
  state = {
    currency: [{ key: 'QAR', value: 'QAR', text: 'QAR' }],
    productsList: [
      { key: 'p1', text: 'Product 1', value: 'p1' },
      { key: 'p2', text: 'Product 2', value: 'p2' },
    ],
  };
  render() {
    return (
      <div className="top-nav">
        <Container>
          <Menu>
            <Menu.Item>
              <Image
                src="images/Header/logo-header.png"
                srcSet="images/Header/logo-header@2x.png 2x,
             images/Header/logo-header@3x.png 3x"
              />
            </Menu.Item>
            <Menu.Item className="products-search">
              <NavProductsSearch products={this.state.productsList} />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item> <NavProductsItems /> </Menu.Item>
              <Menu.Item> <NavWishList /> </Menu.Item>
              <Menu.Item> <NavUserProfile /> </Menu.Item>
              <Menu.Item> <NavNotification /> </Menu.Item>
              <Menu.Item> <NavLanguage /> </Menu.Item>
              <Menu.Item> <NavCurrency currency={this.state.currency} /> </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}
