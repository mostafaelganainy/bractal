// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class CountriesCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedMobCode: 'Select',
      SelectedImg: '',
    };
  }
  componentWillMount() {
    this.loadSelectedCode();
  }
  loadSelectedCode = () => {
    axios
      .get('http://ayk-test.badrit.com/api/user/phonecode')
      .then((response) => {
        this.props.CountriesData.find((o) => {
          if (parseInt(o.callingCodes, 0) === response.data.phonecode) {
            this.setState({ SelectedImg: o.flag });
            return true;
          }
          return false;
        });

        this.setState({ SelectedMobCode: `+ ${response.data.phonecode}` });
        this.handleChange(response.data.phonecode);
      });
  };
  handleChange = Code => this.props.handleCodeChange(Code);

  GetSelectedOpt = (country) => {
    this.handleChange(country.callingCodes[0]);
    const NewSelectedCode = `+${country.callingCodes}`;
    this.setState({ SelectedMobCode: NewSelectedCode });
    this.setState({ SelectedImg: country.flag });
  };
  showDropdown = () => {
    this.props.showDropdown();
  };
  renderDropdown = countriesCodeOpt => (
    <div>
      <div className="Arrowul" />
      <ul className="dropdown-selection" id="CountriesCodeList">
        {countriesCodeOpt}
      </ul>
    </div>
  );

  render() {
    let countriesCodeOpt = '';
    if (this.props.CountriesData) {
      countriesCodeOpt = this.props.CountriesData.map(country => (
        <li
          id={country.name}
          code={country.callingCodes}
          value={country.callingCodes}
          key={country.name}
          onClick={() => this.GetSelectedOpt(country)}
        >
          <div className="imgCountry">
            <img
              src={country.flag}
              alt={country.name}
              className={country.name}
            />
          </div>
          <div className="codeLbl">
            +{country.callingCodes}
          </div>
          <div className="countryName">{country.name}</div>
        </li>
      ));
    }

    return (
      <div className="CountriesData" onClick={this.showDropdown}>
        <div className="dropdown" id="Countries-dropdown">
          <div id="dropdown-button" className="dropdown-button">

            {this.state.SelectedImg !== ''
            ? <img src={this.state.SelectedImg} alt={this.state.SelectedMobCode} />
            : ''
            }
            <span>
              {this.state.SelectedMobCode}
            </span>
          </div>
          <span className="triangle">&#9660;</span>
          {this.props.DropdownisShown
          ? this.renderDropdown(countriesCodeOpt)
          : ''
          }
        </div>
      </div>
    );
  }
}

CountriesCode.propTypes = {
  CountriesData: PropTypes.arrayOf(PropTypes.any).isRequired,
  showDropdown: PropTypes.func.isRequired,
  handleCodeChange: PropTypes.func.isRequired,
  DropdownisShown: PropTypes.bool.isRequired,
};