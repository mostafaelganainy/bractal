import React, { Component } from 'react';
import i18next from 'i18next';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CountiesCode from '../components/CountiesCode';
import CountriesList from '../components/countriesList';


export default class MobileNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedMobCode: '',
      SelectedImg: '',
    };
  }
  handleCodeChange = Code => this.props.handleCodeChange(Code);
  handleChange = (event) => {
    this.props.handleChange(event);
  };
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
        this.handleCodeChange(response.data.phonecode);
      });
  };
  GetSelectedOpt = (country) => {
    this.handleCodeChange(country.callingCodes[0]);
    const NewSelectedCode = `+${country.callingCodes}`;
    this.setState({ SelectedMobCode: NewSelectedCode });
    this.setState({ SelectedImg: country.flag });
  };
  render() {
    return (
      <div className="CountriesData">
        <Grid columns={2} className="dropdown padd0" id="Countries-dropdown">
          <Grid.Row className="padd0">
            <Grid.Column className="paddR0 phoneSlctCont">
              <CountiesCode
                handleCodeChange={this.props.handleCodeChange}
                CountriesData={this.props.CountriesData}
                showDropdown={this.props.showDropdown}
                DropdownisShown={this.props.DropdownisShown}
                loadSelectedCode={this.loadSelectedCode}
                SelectedMobCode={this.state.SelectedMobCode}
                SelectedImg={this.state.SelectedImg}
              />
            </Grid.Column>
            <Grid.Column className="padd4 phoneInpCont">
              <input
                type="text"
                className="phoneInp"
                placeholder={i18next.t('accountManagement:Phone')}
                id="mobile_number"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          {this.props.DropdownisShown
          ? <CountriesList
            CountriesData={this.props.CountriesData}
            GetSelectedOpt={this.GetSelectedOpt}
            SelectedImg={this.state.SelectedImg}
            SelectedMobCode={this.state.SelectedMobCode}
          />
          : ''
          }
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
