import React from 'react';
import { Image } from 'semantic-ui-react';

import TwoLevelsHeader from '~/modules/core/layouts/advancedTwoLevels';

import HomePageLogo from '~/modules/ecommerceCoreUI/components/header/HomePageLogo';
import DropDownBurger from '~/modules/ecommerceCoreUI/components/header/DropDownBurger';
import DepartmentsTab from '~/modules/ecommerceCoreUI/components/header/departments/DepartmentsTab';
import NavProductsItems from '~/modules/ecommerceCoreUI/components/header/headerActions/NavProductsItems';
import NavWishList from '~/modules/ecommerceCoreUI/components/header/headerActions/NavWishList';
import NavUserProfile from '~/modules/ecommerceCoreUI/components/header/headerActions/NavUserProfile';
import NavNotification from '~/modules/ecommerceCoreUI/components/header/headerActions/NavNotification';
import NavLanguage from '~/modules/ecommerceCoreUI/components/header/headerActions/NavLanguage';
import NavCurrency from '~/modules/ecommerceCoreUI/components/header/headerActions/NavCurrency';

import {
  desktopTopHeaderStyles,
  desktopBottomHeaderStyles,
} from './Header.styles';
import { TabLabel } from '../../ecommerceCoreUI/components/basic/Labels';

const SocialMediaItemRenderer = (src, url) => (
  <a href={url}>
    <Image style={{ width: '25px', height: '25px' }} src={src} />
  </a>
);

const Header = () => {
  const menuInfo = {
    desktop: {
      top: {
        left: [
          {
            itemRenderer: <HomePageLogo />,
            targetURL: '/',
          },
        ],
        right: [
          {
            itemRenderer: <NavProductsItems />,
            targetURL: '/path1',
          },
          {
            verticalSeparator: true,
          },
          {
            itemRenderer: <NavWishList />,
            targetURL: '/path2',
          },
          {
            verticalSeparator: true,
          },
          {
            itemRenderer: <NavUserProfile />,
            targetURL: '/path3',
          },
          {
            verticalSeparator: true,
          },
          {
            itemRenderer: <NavNotification />,
            targetURL: '/path4',
          },
          {
            verticalSeparator: true,
          },
          {
            itemRenderer: <NavLanguage />,
            targetURL: '/path5',
          },
          {
            verticalSeparator: true,
          },
          {
            itemRenderer: <NavCurrency />,
            dropdownContent: <div style={{ width: '10px', height: '10px' }} />,
          },
        ],
      },
      bottom: {
        left: [
          {
            itemRenderer: <DropDownBurger />,
            dropdownContent: <DepartmentsTab />,
          },
          {
            horizontalSpacer: true,
          },
          {
            itemRenderer: <TabLabel>Department 0</TabLabel>,
            targetURL: 'http://www.google.com',
          },
          {
            horizontalSpacer: true,
          },
          {
            itemRenderer: <TabLabel>Department 1</TabLabel>,
            targetURL: 'http://www.facebook.com',
          },
        ],
        right: [
          {
            itemRenderer: SocialMediaItemRenderer('/images/SocialMedia/fb-lg.png', 'http://facebook.com'),
            targetURL: 'http://facebook.com',
            position: 'right',
          },
          {
            horizontalSpacer: true,
            spacerWidth: 'medium',
          },
          {
            itemRenderer: SocialMediaItemRenderer('/images/SocialMedia/tr-lg.png', 'http://facebook.com'),
            targetURL: 'http://twitter.com',
            position: 'right',
          },
          {
            horizontalSpacer: true,
            spacerWidth: 'medium',
          },
          {
            itemRenderer: SocialMediaItemRenderer('/images/SocialMedia/yb-lg.png', 'http://facebook.com'),
            targetURL: 'http://youtube.com',
            position: 'right',
          },
          {
            horizontalSpacer: true,
            spacerWidth: 'medium',
          },
          {
            itemRenderer: SocialMediaItemRenderer('/images/SocialMedia/inst-lg.png', 'http://facebook.com'),
            targetURL: 'http://instagram.com',
            position: 'right',
          },
          {
            horizontalSpacer: true,
            spacerWidth: 'large',
          },
        ],
      },
    },
    mobile: {
      top: {
        left: [],
        right: [],
      },
      bottom: {
        left: [],
        right: [],
      },
    },
  };

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

export default Header;
