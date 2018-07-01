import React from 'react';
import PropTypes from 'prop-types';

import TopNav from './TopNav';
import BottomNav from './BottomNav';


const HeaderDesktop = ({ menuInfo }) => (
  <div>
    <TopNav menuInfo={menuInfo.top} />
    <BottomNav menuInfo={menuInfo.bottom} />
  </div>
);

HeaderDesktop.MenuInfoPropTypes = {
  top: PropTypes.shape({
    ...TopNav.MenuInfoPropTypes,
  }).isRequired,
  bottom: PropTypes.shape({
    ...BottomNav.MenuInfoPropTypes,
  }).isRequired,
};

HeaderDesktop.propTypes = PropTypes.shape({
  menuInfo: PropTypes.shape({
    ...HeaderDesktop.MenuInfoPropTypes,
  }).isRequired,
}).isRequired;

export default HeaderDesktop;
