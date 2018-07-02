// eslint-disable-next-line
/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import SocialMedia from '../components/SocialMedia';
import Gender from '../components/Gender';
import Nationalities from '../components/Nationalities';
import MobileNum from '../components/MobileNum';
import Verification from './Verfication';
import AllCountries from './AllCountries.json';
import NewsLetterReg from './NewsLetterReg';
import LoaderIcon from '../components/Loader';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      nationality: '',
      gender: '',
      mobile_number: '',
      country_code: '',
      type: 'password',
      nationalityErrorMessage: '',
      mobile_numberErrorMessage: '',
      first_nameErrorMessage: '',
      passwordErrorMessage: '',
      last_nameErrorMessage: '',
      genderErrorMessage: '',
      emailErrorMessage: '',
      CountriesData: '',
      SavedEmail: localStorage.getItem('SavedEmail') !== 'null'
        ? localStorage.getItem('SavedEmail')
        : '',
      MaleIsactive: '',
      DropdownisShown: false,
    };
  }

  componentWillMount() {
    this.setState({ CountriesData: AllCountries });
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    );
    this.saveStateToLocalStorage();
  }

  validateRegForm = () => (
    this.state.email !== '' &&
    this.state.password !== '' &&
    this.state.last_name !== '' &&
    this.state.first_name !== '' &&
    this.state.gender !== '' &&
    this.state.nationality !== '' &&
    this.state.country_code !== '' &&
    this.state.mobile_number !== '' &&
    this.state.email !== undefined &&
    this.state.password !== undefined &&
    this.state.last_name !== undefined &&
    this.state.first_name !== undefined &&
    this.state.gender !== undefined &&
    this.state.nationality !== undefined &&
    this.state.country_code !== undefined &&
    this.state.mobile_number !== undefined
  );


  handleCodeChange = Code => this.setState({ country_code: Code });

  errorLabelStateFieldName = fieldName => `${fieldName}ErrorMessage`;

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    if (event.target.id === 'gender') {
      if (event.target.value === 'male') {
        this.setState({
          MaleIsactive: true,
        });
      } else {
        this.setState({
          MaleIsactive: false,
        });
      }
    }
  };
  togglePass =() => {
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text',
    });
  };
  ShowRegErrors = (msg) => {
    [
      'email',
      'gender',
      'first_name',
      'last_name',
      'password',
      'nationality',
      'mobile_number',
      'country_code',
    ].forEach((fieldName) => {
      if (fieldName !== 'country_code') {
        if (!this.state[fieldName]) {
          this.setState({
            [this.errorLabelStateFieldName(fieldName)]: msg,
          });
        } else {
          this.setState({
            [this.errorLabelStateFieldName(fieldName)]: '',
          });
        }
      } else if (this.state.mobile_number) {
        if (!this.state[fieldName]) {
          this.setState({
            mobile_numberErrorMessage: msg,
          });
        } else {
          this.setState({
            mobile_numberErrorMessage: '',
          });
        }
      }
    });
  };

  ShowServerRegErrors = (ErrorObj) => {
    [
      'email',
      'gender',
      'first_name',
      'last_name',
      'nationality',
      'password',
      'mobile_number',
      'country_code',
    ].forEach((fieldName) => {
      if (fieldName !== 'country_code') {
        if (ErrorObj[fieldName]) {
          const msgError = ErrorObj[fieldName]
            .filter(val => val)
            .join(', ');
          this.setState({
            [this.errorLabelStateFieldName(fieldName)]: msgError,
          });
        } else {
          this.setState({
            [this.errorLabelStateFieldName(fieldName)]: '',
          });
        }
      } else if (!ErrorObj.mobile_number) {
        if (ErrorObj[fieldName]) {
          const msgError = ErrorObj[fieldName]
            .filter(val => val)
            .join(', ');
          this.setState({
            mobile_numberErrorMessage: msgError,
          });
        } else {
          this.setState({
            mobile_numberErrorMessage: '',
          });
        }
      }
    });
  };
  handleRegSubmit = (event) => {
    const { handleSignUp } = this.props;

    event.preventDefault();
    this.ShowRegErrors(<Trans i18nKey="FillRequiredField" />);
    const RegistedUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      nationality: this.state.nationality,
      mobile_number: this.state.mobile_number,
      country_code: this.state.country_code,
      gender: this.state.gender,
      email: this.state.email,
      password: this.state.password,
    };
    const validateRegForm = this.validateRegForm();

    if (validateRegForm) {
      handleSignUp(RegistedUser, this.ShowServerRegErrors);
    }
  };

  showDropdown =() => {
    this.setState({ DropdownisShown: !this.state.DropdownisShown });
  };

  hydrateStateWithLocalStorage() {
    const SavedEmailval = localStorage.getItem('SavedEmail');
    this.setState({ SavedEmail: SavedEmailval });
  }

  // TODO-Hadeer : Double if the following function is not needed
  saveStateToLocalStorage = () => {
    const SavedEmailval = localStorage.getItem('SavedEmail');
    localStorage.setItem('SavedEmail', SavedEmailval);
    this.setState({ SavedEmail: SavedEmailval });
  }

  RemoveMobileDropdown = (event) => {
    if (event.target.id !== 'input') {
      if (this.state.DropdownisShown === true) {
        this.showDropdown();
      }
    }
  };

  render() {
    const {
      showCreateAccCont,
      isLoading,
      BackLogin,
      close,
    } = this.props;

    let AllCreateAccCont = '';
    let Loader = '';
    if (isLoading) {
      Loader = <LoaderIcon />;
    }
    if (showCreateAccCont) {
      AllCreateAccCont = (
        <Container onClick={this.RemoveMobileDropdown}>
          <div className="AllRegCont">
            <div className="RegisterHdrCont">
              <div className="hdrCont">
                <Header as="h3" textAlign="center">
                  <label className="bkBtn" onClick={BackLogin}>
                    <Trans i18nKey="ArrowBack" />
                    {' '}
                    <span className="BkTxt">
                      {' '}<Trans i18nKey="Back" />
                    </span>
                  </label>

                  <Trans i18nKey="REGISTER" />
                </Header>
                <p className="TextCenter">
                  <Trans i18nKey="JoinOurCommunity" />
                </p>
              </div>
            </div>
            <Grid className="TwoSides">
              <Grid.Row columns="equal" className="padd0" id="borderrBtom">
                <Grid.Column id="firstSide" mobile={16} tablet={16} computer={8}>
                  <div>
                    <Grid columns={2} className="padd0">
                      <Grid.Row className="padd0">
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <input
                            type="text"
                            placeholder={i18next.t('accountManagement:FirstName')}
                            id="first_name"
                            onChange={this.handleChange}
                            required
                            minLength="3"
                            maxLength="255"
                            value={this.state.first_name}
                          />

                          <p className="ErrorMsg">
                            {' '}
                            {this.state.first_nameErrorMessage}
                          </p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <input
                            type="text"
                            placeholder={i18next.t('accountManagement:LastName')}
                            id="last_name"
                            onChange={this.handleChange}
                            required
                            minLength="3"
                            maxLength="255"
                            value={this.state.last_name}
                          />

                          <p className="ErrorMsg">
                            {' '}
                            {this.state.last_nameErrorMessage}
                          </p>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>
                    <Grid columns={2}>
                      <Grid.Row className="padd0">
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <input
                            type="email"
                            placeholder={i18next.t('accountManagement:Email')}
                            id="email"
                            onChange={this.handleChange}
                            required
                            value={this.state.email}
                          />
                          <p className="ErrorMsg">
                            {' '}
                            {this.state.emailErrorMessage}
                          </p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <input
                            type={this.state.type}
                            placeholder={i18next.t('accountManagement:password')}
                            id="password"
                            onChange={this.handleChange}
                            required
                            minLength="6"
                            maxLength="20"
                            value={this.state.password}
                          />
                          <i
                            aria-hidden="true"
                            className="eye icon"
                            onClick={this.togglePass}
                          />

                          <p className="ErrorMsg">

                            {this.state.passwordErrorMessage}
                          </p>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>

                    <Grid columns={2}>
                      <Grid.Row className="padd0">
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <Nationalities
                            handleChange={this.handleChange}
                            CountriesData={this.state.CountriesData}
                          />
                          <p className="ErrorMsg">
                            {' '}
                            {this.state.nationalityErrorMessage}
                          </p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={8}>
                          <MobileNum
                            CountriesData={this.state.CountriesData}
                            handleChange={this.handleChange}
                            handleCodeChange={this.handleCodeChange}
                            showDropdown={this.showDropdown}
                            DropdownisShown={this.state.DropdownisShown}
                          />
                          <p className="ErrorMsg">
                            {' '}
                            {this.state.mobile_numberErrorMessage}
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <Grid columns={2} className="padd0">
                      <Grid.Row className="padd0">
                        <Grid.Column width={4} />
                        <Grid.Column mobile={16} tablet={16} computer={8} className="GenderData">
                          <Gender
                            handleChange={this.handleChange}
                            MaleIsactive={this.state.MaleIsactive}
                            gender={this.state.gender || ''}
                          />
                          <p className="ErrorMsg">
                            {' '}
                            {this.state.genderErrorMessage}
                          </p>

                        </Grid.Column>
                        <Grid.Column width={4} />
                      </Grid.Row>
                    </Grid>
                  </div>
                </Grid.Column>
                <Grid.Column id="SecondSide" mobile={16} tablet={16} computer={8}>
                  <NewsLetterReg handleRegSubmit={this.handleRegSubmit} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <SocialMedia />
          </div>
        </Container>
      );
    } else {
      AllCreateAccCont = (
        <Container>
          <Verification
            close={close}
            SavedEmail={this.state.SavedEmail}
          />
          <SocialMedia />
        </Container>
      );
    }
    return (
      <div>
        {AllCreateAccCont}
        {Loader}
      </div>
    );
  }
}

CreateAccount.propTypes = {
  showCreateAccCont: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  BackLogin: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}.isRequired;
