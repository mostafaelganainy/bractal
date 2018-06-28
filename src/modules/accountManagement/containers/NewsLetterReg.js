import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import i18next from 'i18next';
import PropTypes from 'prop-types';

export default class NewsLetterReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsLetter: true,
    };
  }
  toggleChange =() => {
    this.setState({
      newsLetter: !this.state.newsLetter,
    });
  };
  handleRegSubmit = event => this.props.handleRegSubmit(event);

  render = () => (
    <div>
      <Grid.Row className="chlBxCont">
        <Checkbox
          label={i18next.t('RegisterFornewsLetter')}
          checked={this.state.newsLetter}
          onChange={this.toggleChange}
          id="newsLetter"
        />
      </Grid.Row>
      <Grid.Row>
        <p className="TextCenter">
          <Trans i18nKey="AfterRegisteringyouwillrecieveanemail" />
        </p>
      </Grid.Row>
      <Grid.Row>
        <button className="RegisterBtn" onClick={this.handleRegSubmit}>
          <Trans i18nKey="CreateAnAccount" />
        </button>
      </Grid.Row>
    </div>
  );
}


NewsLetterReg.propTypes = {
  handleRegSubmit: PropTypes.func.isRequired,
}.isRequired;
