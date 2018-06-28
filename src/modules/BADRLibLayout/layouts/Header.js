import React from 'react';
import PropTypes from 'prop-types';
import { Image, Menu } from 'semantic-ui-react';

import TwoLevelsHeader from '../../core/layouts/headers/TwoLevelsHeader';
import DropDownBurger from '../components/common/DropDownBurger';
import DepartmentsDropDownMenu from '../../core/layouts/headers/TwoLevelsHeader/HeaderDesktop/Departments/DepartmentsTab';
import { withModules } from '../../core/utils/modulesLoader';

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
            iconImageSrc: 'https://badrit.com/img/logo-b.png',
            targetURL: '/',
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
            targetURL: '/',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/tr-lg.png', 'http://facebook.com'),
            targetURL: '/',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/yb-lg.png', 'http://facebook.com'),
            targetURL: '/',
            position: 'right',
          },
          {
            iconRenderer: SocialMediaItemRenderer('images/SocialMedia/inst-lg.png', 'http://facebook.com'),
            targetURL: '/',
            position: 'right',
          },
          {
            spacerWithWidth: 10,
            position: 'right',
          },
        ],
      },
    },
  };

  modules.forEach(module => menuInfo.desktopMenuInfo.bottom.items.push({
    targetURL: module.homePath,
    label: module.menuItemTitle,
  }));

  return (
    <TwoLevelsHeader menuInfo={menuInfo} />
  );
};

Header.propTypes = PropTypes.shape({
  moduels: PropTypes.any.isRequired,
}).isRequired;

export default withModules(Header);
