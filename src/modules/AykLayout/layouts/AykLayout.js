import React from 'react';

import HeaderDesktop from '../components/header/HeaderDesktop';
import HeaderMobile from '../components/header/HeaderMobile';
import ProductsListPage from '../../productsCore/containers/ProductsListPage';

class Layout extends React.Component {
  state = {
    width: window.innerWidth,
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1201;
    let header;

    if (isMobile) {
      header = <HeaderMobile />;
    } else {
      header = <HeaderDesktop />;
    }

    return (
      <React.Fragment>
        { header }
        <ProductsListPage MainHeader="most popular" SubHeader="Enjoy our popular products" />
        <ProductsListPage MainHeader="new arrivals" SubHeader="Check our New Arrival Products" />
      </React.Fragment>

    );
  }
}

export default Layout;
