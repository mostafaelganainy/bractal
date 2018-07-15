/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';

const getBackgroundColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primary : props.theme.colors.secondary;
};

const getColor = (props) => {
  if (!props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primary : props.theme.colors.secondary;
};

const getHoverColor = (props) => {
  if (!props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primaryHover : props.theme.colors.secondaryHover;
};

const getClickedColor = (props) => {
  if (!props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primaryClicked : props.theme.colors.secondaryClicked;
};

const getHoverBackgroundColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primaryHover : props.theme.colors.secondaryHover;
};

const getClickedBackgorundColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.named.white;
  }

  return props.primary ? props.theme.colors.primaryClicked : props.theme.colors.secondaryClicked;
};

const Button = styled(Row)`
  position: relative;
  font-size: ${props => props.theme.buttons.fontSize}px;

  width: ${props => (props.width ? props.width : '100%')};
  padding: ${props => props.theme.buttons.padding}px 0px;

  color: ${props => getColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  
  border: ${props => (props.inverted ? props.theme.buttons.border : 0)}px solid;
  border-radius: ${props => props.theme.buttons.radius}px;
  
  cursor: pointer;
  
  &:hover {
    color: ${props => getHoverColor(props)};
    background-color: ${props => getHoverBackgroundColor(props)};    
  }  

  &:active {
    color: ${props => getClickedColor(props)};
    background-color: ${props => getClickedBackgorundColor(props)};
  }
`;

const HiddenActualButton = styled.button`
  opacity: 0;
  position: absolute;

  &:focus + div {
    background: ${props => (props.primary ? props.theme.colors.primaryHover : props.theme.colors.secondaryHover)};
  }
`;

const ButtonLoadingIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: ${props => props.theme.buttons.padding}px;
  height: 100%;
`;

export const BasicButton = props => (
  <React.Fragment>
    <HiddenActualButton {...props} />
    <Button
      {...props}
      centerAlign
      centerJustify
      width={props.width}
    >
      {props.loading &&
        <ButtonLoadingIcon icon={faSpinner} spin />
      }
      {props.children}
    </Button>
  </React.Fragment>
);


BasicButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
}).isRequired;
