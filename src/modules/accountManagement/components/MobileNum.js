import React, { Component } from 'react';
import i18next from 'i18next';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CountiesCode from '../containers/CountiesCode';

export default class MobileNum extends Component {
  handleChange = (event) => {
    this.props.handleChange(event);
  };
  render() {
    return (
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
                placeholder={i18next.t('Phone')}
                id="mobile_number"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

MobileNum.propTypes = {
  handleChange: PropTypes.func.isRequired,
  CountriesData: PropTypes.arrayOf(PropTypes.any).isRequired,
  showDropdown: PropTypes.func.isRequired,
  handleCodeChange: PropTypes.func.isRequired,
  DropdownisShown: PropTypes.bool.isRequired,
}.isRequired;
