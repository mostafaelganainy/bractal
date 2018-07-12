import React, { Component } from 'react';
import { Grid, Header, Checkbox } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import SocialMedia from '../components/SocialMedia';
import RegisterData from '../components/RegisterData';
import LoaderIcon from '../components/Loader';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      EmailErrorMessage: '',
      PassErrorMessage: '',
    };
    this.handleChangeRem = this.handleChangeRem.bind(this);
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
  setErrors = (err) => {
    if (err.response) {
      if (err.response.data.errors.email) {
        this.setState({
          EmailErrorMessage: err.response.data.errors.email,
        });
      } else {
        this.setState({
          EmailErrorMessage: '',
        });
      }
      if (err.response.data.errors.password) {
        this.setState({
          PassErrorMessage: err.response.data.errors.password,
        });
      } else {
        this.setState({
          PassErrorMessage: '',
        });
      }
    }
  };

  handleChangeRem() {
    if (this.state.rememberMe === 'null' || this.state.rememberMe === false) {
      this.setState({ rememberMe: true });
    } else {
      this.setState({ rememberMe: false });
    }
  }

  // TODO-Hadeer : Double if the following function is not needed
  hydrateStateWithLocalStorage = () => {
    localStorage.getItem('AuthToken');
    localStorage.getItem('expiryDate');
  }

  // TODO-Hadeer : Double if the following function is not needed
  saveStateToLocalStorage = () => {
    const AuthTokenval = localStorage.getItem('AuthToken');
    const expiryDate = localStorage.getItem('expiryDate');
    const tokenType = localStorage.getItem('tokenType');
    const uid = localStorage.getItem('uid');
    const client = localStorage.getItem('client');
    localStorage.setItem('AuthToken', AuthTokenval);
    localStorage.setItem('expiryDate', expiryDate);
    localStorage.setItem('tokenType', tokenType);
    localStorage.setItem('uid', uid);
    localStorage.setItem('client', client);
  }
  ToggleLoginContnt = () => {
    this.props.toggleLoginContent();
    this.props.toggleCreateAccountContent();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.ShowRegErrors(<Trans i18nKey="FillRequiredField" />);
    let user = {};
    if (this.state.rememberMe) {
      user = {
        email: this.state.email,
        password: this.state.password,
        remember_me: this.state.rememberMe,
      };
    } else {
      user = {
        email: this.state.email,
        password: this.state.password,
      };
    }

    if (
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.email !== undefined &&
      this.state.password !== undefined
    ) {
      this.props.handleSubmit(user, this.clearFields, this.setErrors);
    }
  };

  clearFields =() => {
    this.setState({ email: '' });
    this.setState({ password: '' });
  };

  ShowRegErrors = (msg) => {
    if (!this.state.email) {
      this.setState({
        EmailErrorMessage: msg,
      });
    } else {
      this.setState({
        EmailErrorMessage: '',
      });
    }
    if (!this.state.password) {
      this.setState({
        PassErrorMessage: msg,
      });
    } else {
      this.setState({
        PassErrorMessage: '',
      });
    }
  };

  render() {
    let Loader = '';
    if (this.props.isLoading) {
      Loader = <LoaderIcon />;
    }
    return (
      <div className="LoginContainer">
        {Loader}
        <div className="AllContnt">
          <div className="LoginCont">
            <Grid className="padd0">
              <Grid.Row columns="equal" className="padd0">
                <Grid.Column className="LoginColmn">
                  <div className="Loginsec">
                    <div className="BkHdr">
                      <Header as="h3" textAlign="center" className="Hdr">
                        <Trans i18nKey="login" />
                      </Header>
                      <p className="TextCenter">
                        <Trans i18nKey="Getinanddescoveryourgift" />
                      </p>
                    </div>
                    <div className="mobLoginLogo">
                      <img src="/images/AccountManagement/logo@2x.png" alt="Ayk Logo" />
                    </div>
                    <form autoComplete="off" className="LoginContnt">
                      <div className="FixedHeight">
                        <Grid.Row>
                          <input
                            type="text"
                            placeholder={i18next.t('accountManagement:EmailMobileNumber')}
                            id="email"
                            autoComplete="off"
                            onChange={this.handleChange}
                            required
                            value={this.state.email || ''}
                          />
                        </Grid.Row>
                        <p className="ErrorMsg">
                          {this.state.EmailErrorMessage}
                        </p>
                        <Grid.Row>
                          <input
                            type="password"
                            placeholder={i18next.t('accountManagement:password')}
                            id="password"
                            autoComplete="off"
                            onChange={this.handleChange}
                            required
                            value={this.state.password || ''}
                          />
                        </Grid.Row>
                        <p className="ErrorMsg">
                          {this.state.PassErrorMessage}
                        </p>
                        <Grid columns={2}>
                          <Grid.Row className="RmmberLost">
                            <Grid.Column>

                              <Checkbox
                                label={i18next.t('accountManagement:RememberMe')}
                                checked={this.state.rememberMe}
                                onChange={this.handleChangeRem}
                              />

                            </Grid.Column>
                            <Grid.Column>
                              <span className="fontSize11 LostPass">
                                <Trans i18nKey="LostYourPassword" />
                              </span>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                      <Grid.Row>
                        <Grid.Column>
                          <button
                            className="LognBtn"
                            onClick={this.handleSubmit}
                          >
                            <Trans i18nKey="Login" />

                          </button>
                        </Grid.Column>
                      </Grid.Row>
                      <div className="TextCenter fontSize11 Bylogin">
                        <p className="TextCenter fontSize11 Bylogin">
                          <Trans i18nKey="Byloginyouagreetoour" />
                          {'  '}
                          <a className="TextCenter fontSize11 Bylogin" href="/">
                            <Trans i18nKey="termsconditions" />
                          </a>
                          {'  '}
                          <Trans i18nKey="ofuse" />
                        </p>
                        <p className="TextCenter fontSize11 ResponsiveCreateAccountTxt">Don’t have account?</p>
                        <button className="ResponsiveCreateAccountBtn" onClick={this.ToggleLoginContnt}>Create an account</button>
                      </div>
                    </form>
                  </div>
                </Grid.Column>
                <Grid.Column only="large screen">
                  <RegisterData
                    toggleLoginContent={this.props.toggleLoginContent}
                    toggleCreateAccountContent={
                      this.props.toggleCreateAccountContent
                    }
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <SocialMedia />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  toggleLoginContent: PropTypes.func.isRequired,
  handleSUbmit: PropTypes.func.isRequired,
  toggleCreateAccountContent: PropTypes.func.isRequired,
}.isRequired;
