/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row } from '~/modules/coreUI/components/layouts/helpers/Rows';


const PrimaryStyle = styled(Row)`
  background-color:${props => props.theme.colors.primary};
  font-size: ${props => props.size || props.theme.fonts.sizes.small}px;
  color: ${props => props.theme.colors.named.white};
  border-radius:5px;
  cursor: pointer;
  padding: ${props => props.theme.fonts.sizes.medium}px;
  width: ${props => (props.width ? props.width : null)};
  &:hover {
    background-color: ${props => props.theme.colors.secondary}
  }  

  &:active {
    background-color: ${props => props.theme.colors.secondaryDark}
  }
`;

export const BasicButton = props => (
  <PrimaryStyle
    centerAlign
    centerJustify
    width={props.width}
  >
    {props.children}
  </PrimaryStyle>
);


BasicButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
}).isRequired;
