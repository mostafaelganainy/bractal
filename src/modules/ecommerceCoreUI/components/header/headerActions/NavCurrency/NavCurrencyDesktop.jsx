import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import {
  SimpleDropdownTriggerStyles,
  StyledHeaderDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const NavCurrencyDesktop = ({ options }) => (
  <StyledHeaderDropdownContainer>
    <Dropdown
      pointing="top right"
      options={options}
      customTriggerLabelStyles={SimpleDropdownTriggerStyles}
      onChange={this.onChange}
    />
  </StyledHeaderDropdownContainer>
);


NavCurrencyDesktop.propTypes = {
  // eslint-disable-next-line function-paren-newline
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
};

export default NavCurrencyDesktop;
