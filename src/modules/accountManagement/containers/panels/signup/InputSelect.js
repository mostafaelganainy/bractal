import React, { Component } from 'react';
import SelectButton from '../signup/CustomSelectButton';
import SelectList from '../signup/SelectList';
import AllCountries from '../../../containers/AllCountries.json';


export default class InputSelect extends Component {
  constructor() {
    super();
    this.state = {
      DropdownIsShown: false,
    };
  }
  componentWillMount() {
    /* eslint-disable no-debugger */
    debugger;
    this.setState({ CountriesData: AllCountries });
  }
  showDropdown =() => {
    this.setState({ DropdownIsShown: !this.state.DropdownIsShown });
  };
  GetSelectedOpt =() => {
    // alert("vv");
  };

  render() {
    return (
      <React.Fragment>
        <SelectButton showDropdown={this.showDropdown} />
        <SelectList ListItems={this.state.CountriesData} GetSelectedOpt={this.GetSelectedOpt} />
      </React.Fragment>
    );
  }
}

