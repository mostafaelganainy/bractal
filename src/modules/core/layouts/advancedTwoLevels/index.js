import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';
// import ModalLink from '~/modules/core/components/Modal/ModalLink';
// import { LargeLabel } from '~/modules/coreUI/components/basic/Labels';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';


// const HeaderMobile = () => (
//   <LargeLabel style={{ height: '50px', padding: '20px' }}>
//     <ModalLink to="/accountManagement/login">
//       Login
//     </ModalLink>
//   </LargeLabel>
// );

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
    const AllItemsGroups = [
      menuInfo.desktop.top.left,
      menuInfo.desktop.top.right,
      menuInfo.desktop.bottom.left,
      menuInfo.desktop.bottom.right,
      menuInfo.mobile.top.left,
      menuInfo.mobile.top.right,
      menuInfo.mobile.bottom.left,
      menuInfo.mobile.bottom.right,
    ];

    AllItemsGroups.forEach((menuSpecs) => {
      menuSpecs.forEach((item) => {
        if (item.key) return;
        // eslint-disable-next-line no-param-reassign
        item.key = cuid();
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
        <div>
          <HeaderDesktop
            menuInfo={menuInfo.desktop}
            topHeaderStyles={desktopTopHeaderStyles}
            bottomHeaderStyles={desktopBottomHeaderStyles}
          />
        </div>
      );
    }

    return header;
  }
}

TwoLevelsHeader.propTypes = PropTypes.shape({
  desktopTopHeaderStyles: PropTypes.string,
  desktopBottomHeaderStyles: PropTypes.string,
  menuInfo: PropTypes.shape({
    desktop: PropTypes.shape({
      ...HeaderDesktop.MenuInfoPropTypes,
    }).isRequired,
    mobile: PropTypes.shape({
      // TODO : Change this when a mobile version is ready
      ...HeaderMobile.MenuInfoPropTypes,
    }),
  }).isRequired,
}).isRequired;

export default TwoLevelsHeader;
