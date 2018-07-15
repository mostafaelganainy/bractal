/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Column } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { MediumLabel } from '~/modules/coreUI/components/basic/Labels';

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

const ButtonLabelStyle = css`
  font-size: ${props => props.theme.buttons.fontSize}px;

  color: ${props => getColor(props)};

  &:hover {
    color: ${props => getHoverColor(props)};
  }

  &:active {
    color: ${props => getClickedColor(props)};
  }
`;

// Must be of relative position for the loading icon to be drawn correctly
const Button = styled(Column)`
  width: ${props => props.width || '100%'};
  position: relative;  
    
  background-color: ${props => getBackgroundColor(props)};
  
  border: ${props => (props.inverted ? props.theme.buttons.border : 0)}px solid;
  border-color: ${props => getColor(props)};
  border-radius: ${props => props.theme.buttons.radius}px;
  
  cursor: pointer;
  
  &:hover {
    color: ${props => getHoverColor(props)};
    background-color: ${props => getHoverBackgroundColor(props)};  
    border-color: ${props => getHoverColor(props)};  
  }  

  &:active {
    color: ${props => getClickedColor(props)};
    background-color: ${props => getClickedBackgorundColor(props)};
    border-color: ${props => getClickedColor(props)};
  }
`;

const HiddenActualButton = styled.button`
  opacity: 0;
  position: absolute;

  &:focus + div {
    color: ${props => getHoverColor(props)};
    background: ${props => getHoverBackgroundColor(props)};
    border-color: ${props => getHoverColor(props)};

    span {
      color: ${props => getHoverColor(props)};
    }
  }
`;

const ButtonLoadingIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: ${props => props.theme.buttons.padding}px;
  height: 100%;
`;

const PaddingSpacer = styled.div`
  width: ${props => props.theme.buttons.padding}px;
  height: ${props => props.theme.buttons.padding}px;
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
      <PaddingSpacer />
      <MediumLabel {...props} customStyle={ButtonLabelStyle}>
        {props.children}
      </MediumLabel>
      <PaddingSpacer />
    </Button>
  </React.Fragment>
);


BasicButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
}).isRequired;
