import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import i18next from 'i18next';

export default class Nationalities extends Component {
  handleChange = (event) => {
    this.props.handleChange(event);
  };
  render() {
    const NationalitiesList = this.props.CountriesData.map(Nationality => (
      <option value={Nationality.name} key={Nationality.name}>
        {Nationality.name}
      </option>
    ));
    return (
      <div>
        <select required placeholder={i18next.t('accountManagement:Nationality')} id="nationality" onChange={this.handleChange} className="nationalitySelect">
          <option value="" disabled selected>
            <Trans i18nKey="Nationality" />
          </option>
          {NationalitiesList}
        </select>
      </div>
    );
  }
}

Nationalities.propTypes = {
  CountriesData: PropTypes.arrayOf(PropTypes.any).isRequired,
}.isRequired;
