import React, {Component} from 'react';
import {Grid, Container} from 'semantic-ui-react';
import {Trans} from 'react-i18next';

export default class SocialMedia extends Component {
  render () {
    return (
      <Container>
        <div className="SocialMediaCont">
          <h5 className="TextCenter connectWith">
            <Trans i18nKey="CONNECTWITH" />
          </h5>
          <Grid columns={4} divided>
            <Grid.Row className="allSocialMedia">
              <Grid.Column className="faceBok TextCenter">

                <img
                  className="SvgCont"
                  src="images/AccountManagement/Accountfb.png"
                  alt="Facebook"
                />

                <div className="IconsCont">
                  <p className="SmFontSocial"><Trans i18nKey="LogInWith" /></p>
                  <p className="LgFontSocial"><Trans i18nKey="Facebook" /></p>

                </div>
              </Grid.Column>
              <Grid.Column className="Tiwiter TextCenter">

                <img
                  className="SvgCont"
                  src="images/AccountManagement/Accounttwitter.png"
                  alt="Twitter"
                />

                <div className="IconsCont">
                  <p className="SmFontSocial">
                    <Trans i18nKey="LogInWith" />
                  </p>
                  <p className="LgFontSocial"><Trans i18nKey="Twitter" /></p>
                </div>

              </Grid.Column>
              <Grid.Column className="Google TextCenter">

                <img
                  className="SvgCont"
                  src="images/AccountManagement/google-plus.png"
                  alt="Twitter"
                />

                <div className="IconsCont">
                  <p className="SmFontSocial"><Trans i18nKey="LogInWith" /> </p>
                  <p className="LgFontSocial"><Trans i18nKey="GooglePlus" /></p>
                </div>
              </Grid.Column>
              <Grid.Column className="Insta TextCenter">

                <img
                  className="SvgCont"
                  src="images/AccountManagement/instagrame.png"
                  alt="Twitter"
                />

                <div className="IconsCont">
                  <p className="SmFontSocial"><Trans i18nKey="LogInWith" /></p>
                  <p className="LgFontSocial"><Trans i18nKey="Instagram" /></p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
