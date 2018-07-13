import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import Dropdown from '~/modules/coreUI/components/basic/Dropdown';

import {
  SimpleDropdownTriggerStyles,
  StyledHeaderDropdownContainer,
} from '../CustomHeaderComponentsStyles';

const DropdownCurrencyItems = styled(StyledHeaderDropdownContainer)`
  .item span {
    font-size: 11px;
    position: relative;
    top: 2px;
  }
  .ui.top.right.pointing.dropdown>.menu{
    width:79px;
    padding: 0 15px;
    box-shadow:none;
  }
  .ui.dropdown .menu>.item{
    padding: 10px 0 !important;
    border-bottom: 1px solid rgba(235, 235, 235,0.6);
    color:rgba(0, 0, 0, 0.5);
    &:hover{
      background: transparent
    }
    &:last-child{
      border-bottom: none;
    }
  }
  .ui.top.pointing.dropdown>.left.menu:after, .ui.top.right.pointing.dropdown>.menu:after{
    right: 45% !important;
  }
  .ui.dropdown .menu .selected.item, .ui.dropdown.selected{
    background: transparent;
    color: #34a8ff;
  }
  .selected {
    position: relative;
    &:after {
      content: "\\F058";
      font-family: Icons, sans-serif;
      position: absolute;
      right:0;
      top: 11px;
      color: #34a8ff;
      font-size: 14px;
    }
  }
`;

const NavCurrencyDesktop = ({ options }) => (
  <DropdownCurrencyItems>
    <Dropdown
      pointing="top right"
      options={options}
      customTriggerLabelStyles={SimpleDropdownTriggerStyles}
      onChange={this.onChange}
    />
  </DropdownCurrencyItems>
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
