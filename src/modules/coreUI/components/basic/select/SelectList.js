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
  border: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};

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
  }
`;
const Input = styled.input`
  border-radius: 0px;
  margin: 7px;
  width: 93%;
  padding: 7px;
  border: 1px solid;
  border-color: rgba(0,0,0,0.11);
  outline: none;

  ::placeholder {
    color: ${props => props.theme.inputs.placeholderColor};
  }
`;
const Arrow = styled.div`
  content: "";
  height: 11px;
  width: 11px;
  background: white;
  position: absolute;
  top: 48px;
  left: 50px;
  transform: rotate(134deg);
  border-left:  solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};
  border-bottom: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};
  z-index: 1000;
`;
const ItemName = styled.div`
text-align:left;
`;

const FilteredItemsList = ({ options, filter, listEntryClicked }) =>
  options
    .filter(entry => !filter || entry.label.toLowerCase().indexOf(filter) === 0)
    .map(entry => (
      <Option
        id={entry.value}
        value={entry.value}
        key={entry.value}
        className="item"
        onClick={() => listEntryClicked(entry)}
      >
        {entry.image &&
          <div className="imgCountry">
            {entry.image}
          </div>
        }

        <ItemName className="ItemName">{entry.label}</ItemName>
        {entry.rightPulledLabel &&
          <div className="codeLbl">
            +{entry.rightPulledLabel}
          </div>
        }
      </Option>
    ));

const ListContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export default class countriesList extends Component {
  state = {
    filter: null,
    visible: false,
  };

  onBlur = () => {
    this.close();
  }

  setMounted = (mounted) => {
    // We need an immediate effect, and state isn't immediate. So we use local var as well
    this.mounted = mounted;
    this.setState({
      mounted,
    });
  }
  getMounted = () => this.state.mounted && this.mounted;

  show = () => {
    this.setState({
      visible: true,
    });
    setTimeout(
      () => {
        console.log('SETTING FOCUS');
        this.inputRef.focus();
      },
      10,
    );
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  toggle = () => {
    if (this.state.visible) {
      this.hide();
    } else {
      this.show();
    }
  }
  close = (requestFocus) => {
    if (!this.state.closing && this.getMounted()) {
      this.setState({
        closing: true,
      });
      this.props.onCloseListRequested(requestFocus);
    }
  }

  listEntryClicked = (entry) => {
    this.setState({
      closing: true,
    });

    if (this.props.onItemSelected) {
      this.props.onItemSelected(entry);
      this.close(true);
    }
  }

  SearchInp = (event) => {
    event.preventDefault();
    this.setState({
      filter: this.inputRef.value.toLowerCase(),
    });
  }

  render() {
    const { options } = this.props;
    const { filter, visible } = this.state;

    return (
      <ListContainer visible={visible}>
        <Arrow />
        <List>
          <li>
            <Input
              placeholder="Search..."
              innerRef={(ref) => { this.inputRef = ref; }}
              onBlur={this.onBlur}
              type="text"
              onKeyUp={this.SearchInp}
            />
          </li>
          <FilteredItemsList
            options={options}
            filter={filter}
            listEntryClicked={this.listEntryClicked}
          />
        </List>
      </ListContainer>
    );
  }
}

countriesList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    image: PropTypes.element,
    value: PropTypes.string,
    attrs: PropTypes.shape({}),
  })).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onCloseListRequested: PropTypes.func.isRequired,
};
