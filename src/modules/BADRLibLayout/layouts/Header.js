import React from 'react';
import PropTypes from 'prop-types';

import TwoLevelsHeader from '../../core/layouts/headers/TwoLevelsHeader';
import DropDownBurger from '../components/common/DropDownBurger';
import DepartmentsDropDownMenu from '../../core/layouts/headers/TwoLevelsHeader/HeaderDesktop/Departments/DepartmentsTab';
import { withModules } from '../../core/utils/modulesLoader';

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
