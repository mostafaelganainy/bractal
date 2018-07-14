/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const PrimaryStyle = styled.div`
  background-color: rgba(255,255,255,0.2);
  font-size: ${props => props.size || props.theme.fonts.sizes.small}px;
  color: ${props => props.theme.colors.named.white};
  border-radius: 15px;
  cursor: pointer;
  padding: 8px 10px;
  line-height: 1.1;
  &:hover {
    background-color: ${props => props.theme.colors.secondary}
  }  

  &:active {
    background-color: ${props => props.theme.colors.secondaryDark}
  }
`;

const SecondaryStyle = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.size || props.theme.fonts.sizes.xLarge}px;
  color: ${props => props.theme.colors.named.white};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}
  }  

  &:active {
    background-color: ${props => props.theme.colors.primaryClicked}
  }
`;


export const BasicButton = (props) => {
  const ButtonElement = props.primary
    ? PrimaryStyle
    : SecondaryStyle;

  return (
    <ButtonElement
      {...props}
      size={props.size}
      className={props.iconName}
    >
      {props.children}
    </ButtonElement>
  );
};

BasicButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
}).isRequired;
