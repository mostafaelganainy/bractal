import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import NavProductsItems from '~/modules/AykLayout/components/header/Common/NavProductsItems';
// import NavProductsSearch from '~/modules/AykLayout/components/header/Common/NavProductsSearch';
import NavNotification from '~/modules/AykLayout/components/header/Common/NavNotification';
import NavWishList from '~/modules/AykLayout/components/header/Common/NavWishList';

class HeaderMobile extends Component {
  toggleVisibility = () => {
    this.props.visible(!this.props.visible);
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
  visible: PropTypes.bool,
};

HeaderMobile.defaultProps = {
  visible: ' ',
};

export default HeaderMobile;
