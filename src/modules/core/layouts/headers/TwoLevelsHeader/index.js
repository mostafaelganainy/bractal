import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';

import HeaderDesktop from './HeaderDesktop';


const HeaderMobile = () => (
  <div />
);

class TwoLevelsHeader extends React.Component {
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

  generateMenuItemsKeys = (menuInfo) => {
    [menuInfo.desktopMenuInfo.top,
      menuInfo.desktopMenuInfo.bottom,
      menuInfo.mobileMenuInfo.top,
      menuInfo.mobileMenuInfo.bottom].forEach((menuSpecs) => {
      // eslint-disable-next-line no-param-reassign
      menuSpecs.items = menuSpecs.items.map((item) => {
        if (item.key) return item;

        return {
          ...item,
          key: cuid(),
        };
      });
    });
  }

  render() {
    const { menuInfo, desktopTopHeaderStyles, desktopBottomHeaderStyles } = this.props;
    const { width } = this.state;
    const isMobile = width <= 1201;
    let header;

    this.generateMenuItemsKeys(menuInfo);

    if (isMobile) {
      header = <HeaderMobile />;
    } else {
      header = (
        <React.Fragment >
          <HeaderDesktop
            menuInfo={menuInfo.desktopMenuInfo}
            topHeaderStyles={desktopTopHeaderStyles}
            bottomHeaderStyles={desktopBottomHeaderStyles}
          />
        </React.Fragment >
      );
    }

    return header;
  }
}

TwoLevelsHeader.propTypes = PropTypes.shape({
  desktopTopHeaderStyles: PropTypes.string,
  desktopBottomHeaderStyles: PropTypes.string,
  menuInfo: PropTypes.shape({
    desktopMenuInfo: PropTypes.shape({
      ...HeaderDesktop.MenuInfoPropTypes,
    }).isRequired,
    mobileMenuInfo: PropTypes.shape({
      ...HeaderDesktop.MenuInfoPropTypes,
    }),
  }).isRequired,
}).isRequired;

export default TwoLevelsHeader;
