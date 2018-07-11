import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

import TwoLevelsHeader from '~/modules/core/layouts/advancedTwoLevels';
import { XLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

import HomePageLogo from '~/modules/coreUI/components/projects/HomePageLogo';
import DropDownBurger from '~/modules/ecommerceCoreUI/components/header/departments/DropDownBurger';
import DepartmentsTab from '~/modules/ecommerceCoreUI/components/header/departments/DepartmentsTab';
import NavProductsItems from '~/modules/ecommerceCoreUI/components/header/headerActions/NavProductsItems';
import NavWishList from '~/modules/ecommerceCoreUI/components/header/headerActions/NavWishList';
import NavUserProfile from '~/modules/ecommerceCoreUI/components/header/headerActions/NavUserProfile';
import NavNotification from '~/modules/ecommerceCoreUI/components/header/headerActions/NavNotification';
import NavLanguage from '~/modules/ecommerceCoreUI/components/header/headerActions/NavLanguage';
import NavCurrency from '~/modules/ecommerceCoreUI/components/header/headerActions/NavCurrency';
import NavProductsSearch from '~/modules/ecommerceCoreUI/components/header/headerActions/NavProductsSearch';

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

const MainHeader = styled.div`
  background: #f8f7f7 !important;
`;

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
        center: [
          {
            itemRenderer: <NavProductsSearch />,
          },
        ],
        right: [
          {
            itemRenderer: <NavProductsItems />,
          },
          {
            verticalSeparator: true,
            separatorColorTone: 'normal',
          },
          {
            itemRenderer: <NavWishList />,
          },
          {
            verticalSeparator: true,
            separatorColorTone: 'normal',
          },
          {
            itemRenderer: <NavUserProfile />,
          },
          {
            verticalSeparator: true,
            separatorColorTone: 'normal',
          },
          {
            itemRenderer: <NavNotification />,
          },
          {
            verticalSeparator: true,
            separatorColorTone: 'normal',
          },
          {
            itemRenderer: <NavLanguage />,
          },
          {
            verticalSeparator: true,
            separatorColorTone: 'normal',
          },
          {
            itemRenderer: <NavCurrency />,
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
    <MainHeader>
      <TwoLevelsHeader
        desktopTopHeaderStyles={desktopTopHeaderStyles}
        desktopBottomHeaderStyles={desktopBottomHeaderStyles}
        menuInfo={menuInfo}
      />
      <XLargeSpacer />
      <XLargeSpacer />
    </MainHeader>
  );
};

export default Header;
