import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import { CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';

import {
  SearchDropdownTriggerStyles,
  StyledProductSearchDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const DepartmentDropdownContent = styled(StyledProductSearchDropdownContainer)`
background-color: red;
`;
const DepartmentDropdown = ({ departments }) => (
  
  <DepartmentDropdownContent>
    <CenterAlignedColumn>
      <Dropdown
        options={departments}
        pointing="top left"
        customTriggerLabelStyles={SearchDropdownTriggerStyles}
        onChange={this.onChange}
      />
    </CenterAlignedColumn>
  </DepartmentDropdownContent>
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
