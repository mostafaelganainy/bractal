import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';

import {
  SearchDropdownTriggerStyles,
  StyledProductSearchDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const DepartmentDropdown = ({ departments }) => (
  <StyledProductSearchDropdownContainer>
    <Column fullWidth stretchAligned>
      <Dropdown
        options={departments}
        pointing="top left"
        customTriggerLabelStyles={SearchDropdownTriggerStyles}
        onChange={this.onChange}
      />
    </Column>
  </StyledProductSearchDropdownContainer>
);


DepartmentDropdown.propTypes = {
  // eslint-disable-next-line function-paren-newline
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
};

export default DepartmentDropdown;
