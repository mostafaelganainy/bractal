import React, {Component} from 'react';
import {I18n, Trans} from 'react-i18next';

export default class Nationalities extends Component {
  handleChange = event => {
    this.props.handleChange (event);
  };
  render () {
    let Nationalities = this.props.CountriesData.map (Nationality => (
      <option value={Nationality.name} key={Nationality.name}>
        {Nationality.name}
      </option>
    ));
    return (
      <I18n>
        {(t, {i18n}) => (
          <div>
            <select
              required
              placeholder={t ('Nationality')}
              id="nationality"
              onChange={this.handleChange}
              className="nationalitySelect">
              <option value="" disabled selected>
                <Trans i18nKey="Nationality" />
              </option>
              {Nationalities}
            </select>
          </div>
        )}
      </I18n>
    );
  }
}
