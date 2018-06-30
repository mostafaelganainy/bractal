import React, { Component, Label } from 'react';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';

export default class Gender extends Component {
  handleChange = (event) => {
    this.props.handleChange(event);
  };

  render() {
    let MaleImage = <img src="images/AccountManagement/male-copy.png" alt="Male" />;
    let FemaleImage = <img src="images/AccountManagement/female.png" alt="Female" />;
    if (this.props.MaleIsactive !== '') {
      if (this.props.MaleIsactive) {
        MaleImage = <img src="images/AccountManagement/male.png" alt="Male" />;
        FemaleImage = <img src="images/AccountManagement/female.png" alt="Female" />;
      } else {
        FemaleImage = <img src="images/AccountManagement/female-copy.png" alt="Female" />;
        MaleImage = <img src="images/AccountManagement/male-copy.png" alt="Male" />;
      }
    }
    return (
      <div>
        <div className="genderLblCont">
          <Label className="genderLbl">
            <Trans i18nKey="Gender" />
          </Label>
        </div>
        <div className="GenderTypes">
          <Label className="MaleSvg">
            <input
              type="radio"
              name="gender"
              value="male"
              id="gender"
              checked={
                this.props.gender !== null && this.props.gender === 'male'
              }
              onChange={this.handleChange}
            />
            {MaleImage}
          </Label>
          <Label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="gender"
              checked={
                this.props.gender !== null && this.props.gender === 'female'
              }
              onChange={this.handleChange}
            />
            {FemaleImage}
          </Label>
        </div>
      </div>
    );
  }
}

Gender.propTypes = {
  handleChange: PropTypes.func.isRequired,
  MaleIsactive: PropTypes.bool.isRequired,
  gender: PropTypes.string.isRequired,
}.isRequired;
