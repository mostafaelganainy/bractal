import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {Trans} from 'react-i18next';

export default class EmailAndSms extends Component {
  ShowEmail = () => {
    this.props.ShowEmail ();
  };
  ShowSMS = () => {
    this.props.ShowSMS ();
  };

  render () {
    return (
      <div>
        <div className="EmailOrSms">
          <div className="VerfyData">
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <img src="images/AccountManagement/logo.png" alt="Email" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <p>
                    <Trans i18nKey="Verfy_Lorem" />
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Grid>
            <Grid.Row columns={2} className="padd0">
              <Grid.Column className="emailVerify">
                <button onClick={this.ShowEmail}>
                  <Trans i18nKey="VerifyByMail" />
                </button>
              </Grid.Column>
              <Grid.Column className="smsVerify">
                <button onClick={this.ShowSMS}>
                  <Trans i18nKey="VerifybySMS" />
                </button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid className="MarginTop0">
            <Grid.Row className="padd0">
              <Grid.Column>
                <ul>
                  <li>
                    <strong>
                      <Trans i18nKey="VerifyByMail" />
                    </strong>
                    {'   '}
                    <label>
                      <Trans i18nKey="VerfySMSOrEmail_Lorem" />
                    </label>
                  </li>
                  <li>
                    <strong>
                      <Trans i18nKey="VerifybySMS" />
                    </strong>
                    {'   '}
                    <label>
                      <Trans i18nKey="VerfySMSOrEmail_Lorem" />
                    </label>
                  </li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
