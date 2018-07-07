/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PrimaryStyleIconButton = styled.i`
  font-size: ${props => props.theme.fonts.sizes.xLarge}px;

  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.secondary}
  }  

  &:active {
    color: ${props => props.theme.colors.secondaryDark}
  }
`;

const SecondaryStyleIconButton = styled.i`
  font-size: ${props => props.theme.fonts.sizes.xLarge}px;

  color: ${props => props.theme.colors.secondary};
  &:hover {
    color: ${props => props.theme.colors.primary}
  }  

  &:active {
    color: ${props => props.theme.colors.primaryDark}
  }
`;

export const IconOnlyButton = (props) => {
  const ButtonElement = props.primary
    ? PrimaryStyleIconButton
    : SecondaryStyleIconButton;

  return (
    <ButtonElement
      className={props.iconName}
    />
  );
};

IconOnlyButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
}).isRequired;
