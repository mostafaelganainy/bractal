import React, {Component} from 'react';
import {Trans} from 'react-i18next';

export default class Gender extends Component {
  handleChange = event => {
    this.props.handleChange (event);
  };

  render () {
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
          <label className="genderLbl">
            <Trans i18nKey="Gender" />
          </label>
        </div>
        <div className="GenderTypes">
          <label className="MaleSvg">
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
          </label>
          <label>
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
          </label>
        </div>
      </div>
    );
  }
}
