import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';

import axios from 'axios';
import EmailAndSms from '../components/EmailAndSms';
import EmailOrSms from '../components/EmailOrSms';

export default class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SmsOrEmailVerify: true,
      ToggleSms: false,
      ToggleEmail: false,
      Code: '',
      ErrorCode: '',
      SuccessCode: '',
      ResndEmailerror: '',
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    );
  }

  toggleSMSorEmailVerify = () => this.setState({ SmsOrEmailVerify: !this.state.SmsOrEmailVerify })

  ShowSMS =() => {
    this.setState(
      {
        ToggleSms: !this.state.ToggleSms,
      },
      () => this.toggleSMSorEmailVerify,
    );
  };
  ShowEmail =() => {
    this.setState(
      {
        ToggleEmail: !this.state.ToggleEmail,
      },
      () => this.toggleSMSorEmailVerify,
    );
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  CheckValidaionErrorMsg = (Msg) => {
    this.setState({
      ErrorCode: Msg,
    });
  };
  CheckResendErrorMsg = (Msg) => {
    this.setState({
      ResndEmailerror: Msg,
    });
    setTimeout(() => {
      this.setState({
        ResndEmailerror: '',
      });
    }, 3000);
  };
  CheckValidaionSuccMsg = (Msg) => {
    this.setState({
      SuccessCode: Msg,
    });
    setTimeout(() => {
      this.setState({
        SuccessCode: '',
      });
    }, 3000);
  };

  // TODO-Hadeer : Double if the following function is not needed
  hydrateStateWithLocalStorage = () => {
    localStorage.getItem('AuthToken');
    localStorage.getItem('expiryDate');
  }
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

  handleVerifyCode = (event) => {
    event.preventDefault();
    if (this.state.Code === '') {
      this.CheckValidaionErrorMsg(<Trans i18nKey="FillRequiredField" />);
      this.CheckValidaionSuccMsg('');
    }
    const code = {
      confirmation_token: this.state.Code,
    };
    if (this.state.Code !== '' && this.state.Code !== undefined) {
      axios({
        url: 'http://ayk-test.badrit.com/api/confirmation/verify',
        data: code,
        method: 'POST',
      }).then((resp) => {
        if (!resp.data.success) {
          this.CheckValidaionErrorMsg(resp.data.message);
          this.CheckValidaionSuccMsg('');
        } else {
          localStorage.setItem('AuthToken', resp.headers['access-token']);
          localStorage.setItem('expiryDate', resp.headers.expiry);
          localStorage.setItem('tokenType', resp.headers['token-type']);
          localStorage.setItem('uid', resp.headers.uid);
          localStorage.setItem('client', resp.headers.client);
          this.props.close();
        }
      });
    }
  };

  ResendAccountConfiramtion = (event) => {
    event.preventDefault();
    const ConfirmationCode = {
      email: this.props.SavedEmail,
    };

    if (this.props.SavedEmail) {
      axios({
        url: 'http://ayk-test.badrit.com/api/confirmation/resend',
        data: ConfirmationCode,
        method: 'POST',
      }).then((resp) => {
        if (!resp.data.success) {
          this.CheckResendErrorMsg(resp.data.message);
          this.CheckValidaionSuccMsg('');
        } else {
          this.CheckValidaionSuccMsg(<Trans i18nKey="SendSuccessfully" />);
          this.CheckResendErrorMsg('');
        }
      });
    }
  };

  render() {
    return (
      <Container>
        <div className="VerfyAccCont">
          <div className="PaddingSides">
            <div className="borderCont">
              <div className="VerfyAcc">
                <div>
                  <Header as="h3">
                    <Trans i18nKey="VerifyYourAccount" />
                  </Header>
                  <p>
                    <Trans i18nKey="NecessarySteptoactiveyouraccount" />
                  </p>
                </div>
                <div>
                  {this.state.SmsOrEmailVerify
                    ?
                      <EmailAndSms
                        ShowEmail={this.ShowEmail}
                        ShowSMS={this.ShowSMS}
                      />
                    :
                      <EmailOrSms
                        ToggleEmail={this.state.ToggleEmail}
                        ToggleSms={this.state.ToggleSms}
                        handleChange={this.handleChange}
                        ErrorCode={this.state.ErrorCode}
                        ResndEmailerror={this.state.ResndEmailerror}
                        SuccessCode={this.state.SuccessCode}
                        ResendAccountConfiramtion={
                          this.ResendAccountConfiramtion
                        }
                        handleVerifyCode={this.handleVerifyCode}
                      />
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

Verification.propTypes = PropTypes.shape({
  close: PropTypes.func.isRequired,
  SavedEmail: PropTypes.string.isRequired,
}).isRequired;
