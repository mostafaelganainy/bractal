// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const List = styled.ul`
  visibility: visible;
  transition: all 0.3s ease;
  transform: scaleY(1);
  color: #333;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
  transform-origin: top;
  padding: 0;
  list-style: none;
  background-color: white;
  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  margin-top: 31px;
  left: 0%;
`;
const Option = styled.li`
  background: #fff;
  padding: 8px 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 0.2s ease;
  position: relative;
  font-size: 13px;
  border-bottom: 1px solid #f5f5f5;
  min-height: 40px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  &&:hover{
    background: #f6f6f6;
    transition: background 0.2s ease;
  }
  img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: 0px;
    margin-right:10px;
  }
`;
const Input = styled.input`
    border-radius: 0px;
    margin: 7px;
    width: 93%;
    padding: 7px;
    border: 1px solid;
    border-color: rgba(0,0,0,0.22);
    outline: none;
`;
const Arrow = styled.div`
    content: "";
    height: 11px;
    width: 11px;
    background: white;
    position: absolute;
    top: 40px;
    left: 50px;
    transform: rotate(134deg);
    border-left: 1px solid #d4d4d5bd;
    border-bottom: 1px solid #d4d4d5bd;
    z-index: 1000;
`;
const ItemName = styled.div`
text-align:left;
`;
export default class countriesList extends Component {
  componentDidMount() {
    document.getElementById('input').focus();
  }
  GetSelectedOpt = (item) => {
    this.props.GetSelectedOpt(item);
  }
  SearchInp= (event) => {
    event.preventDefault();
    const input = document.getElementById('input');
    const filter = input.value.toUpperCase();
    const lis = document.getElementsByClassName('Item');
    for (let i = 0; i < lis.length; i += 1) {
      const name = lis[i].getElementsByClassName('ItemName')[0].innerHTML;
      if (name.toUpperCase().indexOf(filter) === 0) {
        lis[i].style.display = 'flex';
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
        onClick={() => this.GetSelectedOpt(Item)}
      >
        {this.props.hasFlag ?
          <div className="imgCountry">
            <img src={Item.flag} alt={Item.name} className={Item.name} />
          </div> : ''}{
      }

        <ItemName className="ItemName">{Item.name}</ItemName>
        {this.props.hasFlag ?
          <div className="codeLbl">
            +{Item.callingCodes}
          </div> : ''}
      </Option>
    ));
    return (
      <div>
        <Arrow />
        <List className="dropdown-selection" id="ListItems">
          <li><Input type="text" className="searchInp" id="input" onKeyUp={this.SearchInp} /></li>
          {option}
        </List>
      </div>
    );
  }
}


countriesList.propTypes = {
  ListItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  GetSelectedOpt: PropTypes.func.isRequired,
  hasFlag: PropTypes.bool.isRequired,
};
