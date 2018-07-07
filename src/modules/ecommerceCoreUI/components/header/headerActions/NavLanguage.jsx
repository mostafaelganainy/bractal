import React, { Component } from 'react';
import NavLanguageMobile from './NavLanguage/NavLanguageMobile';
import NavLanguageDesktop from './NavLanguage/NavLanguageDesktop';

export default class NavLanguage extends Component {
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

    let languageView;

    if (isMobile) {
      languageView = <NavLanguageMobile />;
    } else {
      languageView = <NavLanguageDesktop />;
    }

    return (
      <div>
        {languageView}
      </div>
    );
  }
}
