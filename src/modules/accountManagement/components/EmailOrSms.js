import React, {Component} from 'react';
import {I18n, Trans} from 'react-i18next';

export default class EmailOrSms extends Component {
  handleChange = event => {
    this.props.handleChange (event);
  };
  handleVerifyCode = event => {
    this.props.handleVerifyCode (event);
  };
  ResendAccountConfiramtion = event => {
    this.props.ResendAccountConfiramtion (event);
  };
  render () {
    return (
      <I18n>
        {(t, {i18n}) => (
          <div>
            <div className="SmsOrEmailVerify">
              <div>
                {this.props.ToggleEmail
                  ? <div>
                      <img
                        src="images/AccountManagement/SMSImages.png"
                        alt="Email"
                      />
                    </div>
                  : ''}
                {this.props.ToggleSms
                  ? <div>
                      <img
                        src="images/AccountManagement/sms.png"
                        alt="Mobile"
                      />
                    </div>
                  : ''}
                <p>
                  <Trans i18nKey="VerfySMSOrEmail_Lorem" />
                  {' '}
                </p>
              </div>
              <div className="CodeContainer">
                <div>
                  <input
                    type="text"
                    placeholder={t ('AddCodeHere')}
                    id="Code"
                    onChange={this.handleChange}
                  />
                </div>
                <p className="ErrorMsg">
                  {this.props.ErrorCode}
                </p>
                <div>
                  <button onClick={this.handleVerifyCode}>
                    <Trans i18nKey="VerifyYourAccount" />
                  </button>
                </div>
                <div className="ResendCont">
                  <label className="QouteFoter">
                    <Trans i18nKey="Didreceivethecodeyet" />
                  </label>
                  <label
                    className="Resend"
                    onClick={this.ResendAccountConfiramtion}
                  >
                    <Trans i18nKey="Resendit" />
                  </label>
                  <p className="ErrorMsg">
                    {this.props.ResndEmailerror}
                  </p>
                  <p className="SuccessMsg">
                    {this.props.SuccessCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </I18n>
    );
  }
}
