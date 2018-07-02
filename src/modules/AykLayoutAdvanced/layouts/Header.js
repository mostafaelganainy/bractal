import React from 'react';
import PropTypes from 'prop-types';
import { Image, Menu } from 'semantic-ui-react';

import HomePageLogo from '../components/header/HomePageLogo';
import TwoLevelsHeader from '../../core/layouts/headers/TwoLevelsHeader';
import DropDownBurger from '../components/header/DropDownBurger';
import DepartmentsDropDownMenu from '../components/header/departments/DepartmentsTab';
import { withModules } from '../../core/utils/modulesLoader';
import NavCurrencyDesktop from '../components/header/headerActions/NavCurrency/NavCurrencyDesktop';
import {
  desktopTopHeaderStyles,
  desktopBottomHeaderStyles,
} from './Header.styles';

const SocialMediaItemRenderer = (src, url) => (
  <Menu.Item style={{ padding: '0 3px' }} >
    <a href={url}>
      <Image style={{ width: '25px', height: '25px' }} src={src} />
    </a>
  </Menu.Item>
);

const Header = ({ modules }) => {
  const menuInfo = {
    desktopMenuInfo: {
      top: {
        items: [
          {
            iconRenderer: <HomePageLogo />,
            targetURL: '/',
          },
          {
            iconRenderer: <NavCurrencyDesktop currency={[{ text: 'QAR' }, { text: 'USD' }]} />,
            position: 'right',
          },
        ],
      },
      bottom: {
        items: [
          {
            iconRenderer: <DropDownBurger />,
            dropdownContent: <DepartmentsDropDownMenu />,
          },
          {
            spacerWithWidth: 10,
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/fb-lg.png', 'http://facebook.com'),
            targetURL: 'http://facebook.com',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/tr-lg.png', 'http://facebook.com'),
            targetURL: 'http://twitter.com',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/yb-lg.png', 'http://facebook.com'),
            targetURL: 'http://youtube.com',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/inst-lg.png', 'http://facebook.com'),
            targetURL: 'http://instagram.com',
            position: 'right',
          },
          {
            spacerWithWidth: 10,
            position: 'right',
          },
        ],
      },
    },
    mobileMenuInfo: {
      top: {
        items: [],
      },
      bottom: {
        items: [],
      },
    },
  };

  modules.forEach(module => menuInfo.desktopMenuInfo.bottom.items.push({
    targetURL: module.homePath,
    label: module.menuItemTitle,
  }));

  return (
    <div className="main-header">
      <TwoLevelsHeader
        desktopTopHeaderStyles={desktopTopHeaderStyles}
        desktopBottomHeaderStyles={desktopBottomHeaderStyles}
        menuInfo={menuInfo}
      />
    </div>
  );
};

Header.propTypes = PropTypes.shape({
  moduels: PropTypes.any.isRequired,
}).isRequired;

export default withModules(Header);
