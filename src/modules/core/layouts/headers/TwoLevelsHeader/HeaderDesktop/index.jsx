import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import TopNav from './TopNav';
import BottomNav from './BottomNav';

// The following is a solution to give the dropdown content from
// the menu a first position parent, so that it stay within the page limits
const PositionedContainer = styled(Container)`
  .container {
    position: relative;
  }
`;

const HeaderDesktop = ({ menuInfo }) => (
  <PositionedContainer>
    <TopNav menuInfo={menuInfo.top} />
    <BottomNav menuInfo={menuInfo.bottom} />
  </PositionedContainer>
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
