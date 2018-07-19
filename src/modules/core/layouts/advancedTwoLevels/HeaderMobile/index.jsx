import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import NavProductsItems from '~/modules/ecommerceCoreUI/components/header/headerActions/NavProductsItems';
// import NavProductsSearch from
// '~/modules/ecommerceCoreUI/components/header/headerActions/NavProductsSearch';
import NavNotification from '~/modules/ecommerceCoreUI/components/header/headerActions/NavNotification';
import NavWishList from '~/modules/ecommerceCoreUI/components/header/headerActions/NavWishList';

class HeaderMobile extends Component {
  toggleVisibility = () => {
    this.props.toggleVisibility(true);
  };
  render() {
    return (
      <Menu>
        <Menu.Item className="menu-btn">
          <Icon name="bars" onClick={this.toggleVisibility} />
        </Menu.Item>
        <Menu.Item>
          <Link to="/" href="/">
            <Image
              src="/images/Header/logo-header.png"
              className="logo"
            />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NavWishList />
          </Menu.Item>
          <Menu.Item>
            <NavNotification />
          </Menu.Item>
          <Menu.Item>
            <NavProductsItems />
          </Menu.Item>
        </Menu.Menu>
        {/* <NavProductsSearch products={this.state.productsList} /> */}
      </Menu>
    );
  }
}

HeaderMobile.propTypes = {
  toggleVisibility: PropTypes.bool,
};

HeaderMobile.defaultProps = {
  toggleVisibility: ' ',
};

export default HeaderMobile;
