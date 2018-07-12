import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Image, Icon } from 'semantic-ui-react';
import NavProductsItems from '../Common/NavProductsItems';
import NavProductsSearch from '../Common/NavProductsSearch';
import HeaderMobileSideMenu from '../HeaderMobile/HeaderMobileSideMenu';
import NavNotification from '../Common/NavNotification';
import NavUserProfile from '../Common/NavUserProfile';
import NavWishList from '../Common/NavWishList';

export default class HeaderMobile extends Component {
  state = {
    visible: false,
    productsList: [
      { key: 'p1', text: 'Product 1', value: 'p1' },
      { key: 'p2', text: 'Product 2', value: 'p2' },
    ],
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div className="nav-mobile">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            // inverted
            className="side-menu"
          >
            <HeaderMobileSideMenu />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic className="top-nav">
              <Menu>
                <Menu.Item className="menu-btn">
                  <Icon name="bars" onClick={this.toggleVisibility} />
                </Menu.Item>
                <Menu.Item>
                  <Image
                    src="/images/Header/logo-header.png"
                    srcSet="/images/Header/logo-header@2x.png 2x,
             /images/Header/logo-header@3x.png 3x"
                    className="logo"
                  />
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <NavWishList />
                  </Menu.Item>
                  <Menu.Item>
                    <NavUserProfile />
                  </Menu.Item>
                  <Menu.Item>
                    <NavNotification />
                  </Menu.Item>
                  <Menu.Item>
                    <NavProductsItems />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <NavProductsSearch products={this.state.productsList} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
