// eslint-disable-next-line
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  cursor: pointer;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  padding-left: ${props => props.theme.paddings.large}px;
  padding-right: ${props => props.theme.paddings.large}px;
  height:${props => props.theme.paddings.xxxxxLarge + 2}px;
  border: ${props => props.theme.borders.size.thin}px solid;
  border-color: ${props => props.theme.inputs.borderColor};
  border-radius:${props => props.theme.inputs.radius}px;
  outline: none;
  border-top-right-radius:${props => (props.width ? props.theme.inputs.radius : '0')};
  border-bottom-right-radius:${props => (props.width ? props.theme.inputs.radius : '0')};
  background-color: white;
  margin-right: ${props => props.theme.inputs.padding.right}px;
  margin-top:2px;
`;
const RelativePosition = styled.div`
position:relative;
width:${props => (props.width ? props.width : '100%')};
margin-right:${props => (props.width ? '10px' : '0px')};
`;
const Triangle = styled.span`
position:absolute;
top:10px;
right:10px;
cursor:pointer;

`;

export default class CountriesCode extends Component {
  showDropdown = () => {
    this.props.showDropdown();
  };
  render() {
    return (
      <RelativePosition width={this.props.width}>
        <Button onClick={this.showDropdown} >
          {this.props.SelectedImg
        ? <img src={this.props.SelectedImg} alt={this.props.SelectedItem} />
        : ''
        }
          {this.props.SelectedItem !== ''
        ?
          <span className="codeSelected">
            {this.props.SelectedItem}
          </span>
        : ''
        }

        </Button>
        <Triangle onClick={this.showDropdown} >&#9660;</Triangle>
      </RelativePosition>
    );
  }
}
CountriesCode.defaultProps = {
  SelectedImg: '',
  width: '',
};
CountriesCode.propTypes = {
  showDropdown: PropTypes.func.isRequired,
  SelectedItem: PropTypes.string.isRequired,
  SelectedImg: PropTypes.string,
  width: PropTypes.string,
};
