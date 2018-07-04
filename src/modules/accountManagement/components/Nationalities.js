
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nationalities extends Component {
  componentDidMount() {
    this.shortString();
  }
   shortString= () => {
     const shorts = document.querySelectorAll('.short');
     if (shorts) {
       Array.prototype.forEach.call(shorts, (ele) => {
         let str = ele.innerText;
         const indt = '...';

         if (ele.hasAttribute('data-limit')) {
           if (str.length > ele.dataset.limit) {
             let result = `${str.substring(0, ele.dataset.limit - indt.length).trim()}${indt}`;
             ele.innerText = result;
             str = null;
             result = null;
           }
         } else {
           throw Error('Cannot find attribute \'data-limit\'');
         }
       });
     }
   }
  handleChange = (event) => {
    this.props.handleChange(event);
  };
  showNationalitiesDropdown = () => {
    /* eslint-disable no-debugger */
    debugger;
    this.props.showNationalitiesDropdown();
  };
  render() {
    const NationalitiesList = this.props.CountriesData.map(Nationality => (
      <li id={Nationality.name} key={Nationality.name} className="NationalityDataLi">
        <div className="NationalityName">{Nationality.name}</div>
      </li>
    ));
    return (
      <div id="NationaltiesList">
        <button id="NationaltiesSelect" className="Nationalities-button" onClick={this.showNationalitiesDropdown} >
          {this.props.SelectedImg !== ''
          ? <img src={this.props.SelectedImg} alt={this.props.SelectedMobCode} />
           : ''
          }
          <span className="codeSelected">
            {this.props.SelectedMobCode}
          </span>
          <span className="triangle">&#9660;</span>
        </button>
        {this.props.NationalityDropdownisShown
          ?
            <div>
              <div className="Arrowul" />
              <ul>
                {NationalitiesList}
              </ul>
            </div>
          : ''
          }
      </div>
    );
  }
}

Nationalities.propTypes = {
  CountriesData: PropTypes.arrayOf(PropTypes.any).isRequired,
  showNationalitiesDropdown: PropTypes.func.isRequired,
  NationalityDropdownisShown: PropTypes.bool.isRequired,
}.isRequired;
