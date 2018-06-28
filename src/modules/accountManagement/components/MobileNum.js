import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import CountiesCode from '../../containers/AccountManagement/CountiesCode';
import {Grid} from 'semantic-ui-react';

export default class MobileNum extends Component {
  handleChange = event => {
    this.props.handleChange (event);
  };
  render () {
    return (
      <I18n>
        {(t, {i18n}) => (
          <div>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column className="paddR0 phoneSlctCont">
                  <CountiesCode
                    handleCodeChange={this.props.handleCodeChange}
                    CountriesData={this.props.CountriesData}
                    showDropdown={this.props.showDropdown}
                    DropdownisShown={this.props.DropdownisShown}
                  />
                </Grid.Column>
                <Grid.Column className="padd4 phoneInpCont">
                  <input
                    type="text"
                    className="phoneInp"
                    placeholder={t ('Phone')}
                    id="mobile_number"
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )}
      </I18n>
    );
  }
}
