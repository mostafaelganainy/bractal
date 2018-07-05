import React, { Component } from 'react';
import NavCurrencyDesktop from '../NavCurrency/NavCurrencyDesktop';
import NavCurrencyMobile from '../NavCurrency/NavCurrencyMobile';

export default class NavCurrency extends Component {
  state = {
    width: window.innerWidth,
    currencies: [
      { text: 'QAR' },
      { text: 'USD' },
    ],
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

    let currencyView;

    if (isMobile) {
      currencyView = <NavCurrencyMobile currency={this.state.currencies} />;
    } else {
      currencyView = <NavCurrencyDesktop currency={this.state.currencies} />;
    }

    return <div>{currencyView}</div>;
  }
}
