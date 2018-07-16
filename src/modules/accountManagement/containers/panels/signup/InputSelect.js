import React, { Component } from 'react';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SelectButton from '../signup/CustomSelectButton';
import SelectList from '../signup/SelectList';


const RelativePosition = styled(CenterAlignedRow)`
   position:relative;
   width:100%;
`;
const Input = styled.input`
    width: 60%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 1px solid;
    border-color: rgba(0,0,0,0.22);
    border-radius: 25px;
    outline: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
`;
export default class InputSelect extends Component {
  showDropdown= () => {
    this.props.showDropdown();
  }
  render() {
    return (
      <React.Fragment>
        <RelativePosition>
          <SelectButton
            showDropdown={this.showDropdown}
            hasFlag={this.props.hasFlag}
            width={this.props.width}
          />
          {this.props.showInput ? <Input type="text" placeholder="Mobile number" /> : ''}
          {this.props.DropdownIsShown ? <SelectList ListItems={this.props.CountriesData} GetSelectedOpt={this.props.GetSelectedOpt} hasFlag={this.props.hasFlag} /> : ''}
        </RelativePosition>
      </React.Fragment>
    );
  }
}


InputSelect.propTypes = PropTypes.shape({
  showInput: PropTypes.bool.isRequired,
  hasFlag: PropTypes.bool.isRequired,
  DropdownIsShown: PropTypes.bool.isRequired,
  showDropdown: PropTypes.func.isRequired,
  width: PropTypes.string,
  CountriesData: PropTypes.array.isRequired,
}).isRequired;

