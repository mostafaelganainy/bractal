/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const PrimaryStyle = styled.div`
  background-color:${props => props.theme.colors.primary};
  font-size: ${props => props.size || props.theme.fonts.sizes.small}px;
  color: ${props => props.theme.colors.named.white};
  border-radius:5px;
  cursor: pointer;
  padding: 8px 50px;
  line-height: 2.0;
  font-weight: bold;
  margin-right:10px; 
  text-align: center;
  width: ${props => (props.width ? props.width : '100%')};
  &:hover {
    background-color: ${props => props.theme.colors.secondary}
  }  

  &:active {
    background-color: ${props => props.theme.colors.secondaryDark}
  }
`;
export const BasicButton = props => (
  <PrimaryStyle
    width={props.width}
  >
    {props.children}
  </PrimaryStyle>
);


BasicButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
}).isRequired;
