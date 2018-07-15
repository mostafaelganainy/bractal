// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const List = styled.ul`
      visibility: visible;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    color: #333;
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 100;
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    padding: 0;
    list-style: none;
    background-color: white;
    -webkit-box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    margin-top: 0px;
    /* top: 100%; */
    width: 200px;
    left:34%;
`;
const Option = styled.li`
    background: #fff;
    padding: 8px 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: background 0.2s ease;
    -o-transition: background 0.2s ease;
    transition: background 0.2s ease;
    position: relative;
    font-size: 13px;
    border-bottom: 1px solid #f5f5f5;
    min-height: 40px;
`;
export default class countriesList extends Component {
  componentDidMount() {
    document.getElementById('input').focus();
  }
  SearchInp= (event) => {
    event.preventDefault();
    const input = document.getElementById('input');
    const filter = input.value.toUpperCase();
    const lis = document.getElementsByClassName('Item');
    for (let i = 0; i < lis.length; i += 1) {
      const name = lis[i].getElementsByClassName('ItemName')[0].innerHTML;
      if (name.toUpperCase().indexOf(filter) === 0) {
        lis[i].style.display = 'list-item';
      } else {
        lis[i].style.display = 'none';
      }
    }
  }
  render() {
    let option = '';
    option = this.props.ListItems.map(Item => (
      <Option
        id={Item.name}
        value={Item.callingCodes ? Item.callingCodes : Item.name}
        key={Item.name}
        className="Item"
        onClick={() => this.props.GetSelectedOpt(Item)}
      >
        {Item.flag}{
          <div className="imgCountry">
            <img src={Item.flag} alt={Item.name} className={Item.name} />
          </div>
      }
        {Item.callingCodes}{
          <div className="codeLbl">
            +{Item.callingCodes}
          </div>
        }
        <div className="ItemName">{Item.name}</div>
      </Option>
    ));
    return (
      <div>
        <div className="Arrowul" />
        <List className="dropdown-selection" id="ListItems">
          <li><input type="text" className="searchInp" id="input" onKeyUp={this.SearchInp} /></li>
          {option}
        </List>
      </div>
    );
  }
}


countriesList.propTypes = {
  ListItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  GetSelectedOpt: PropTypes.func.isRequired,
};