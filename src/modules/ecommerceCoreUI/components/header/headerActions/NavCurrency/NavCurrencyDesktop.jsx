import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import {
  customTriggerLabelStyles,
  StyledHeaderDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const NavCurrencyDesktop = ({ options }) => (
  <StyledHeaderDropdownContainer>
    <Dropdown
      options={options}
      customTriggerLabelStyles={customTriggerLabelStyles}
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
