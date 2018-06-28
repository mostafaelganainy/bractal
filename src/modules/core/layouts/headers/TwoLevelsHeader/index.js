import React from 'react';
import PropTypes from 'prop-types';

import HeaderDesktop from './HeaderDesktop';
import PageContent from '../../content/AllLoadedModulesContent';


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

  render() {
    const { menuInfo } = this.props;
    const { width } = this.state;
    const isMobile = width <= 1201;
    let header;

    if (isMobile) {
      header = <HeaderMobile />;
    } else {
      header = (
        <React.Fragment >
          <HeaderDesktop
            menuInfo={menuInfo.desktopMenuInfo}
          />
          <PageContent />
        </React.Fragment >
      );
    }

    return header;
  }
}

TwoLevelsHeader.propTypes = PropTypes.shape({
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
