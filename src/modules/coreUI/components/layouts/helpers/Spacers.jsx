import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SmallSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.small}px;
  height: ${props => props.size || props.theme.paddings.small}px;
`;

export const MediumSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.medium}px;
  height: ${props => props.size || props.theme.paddings.medium}px;
`;

export const LargeSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.large}px;
  height: ${props => props.size || props.theme.paddings.large}px;
`;

export const XLargeSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.xLarge}px;
  height: ${props => props.size || props.theme.paddings.xLarge}px;
`;

export const XXLargeSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.xxLarge}px;
  height: ${props => props.size || props.theme.paddings.xxLarge}px;
`;

export const XXXLargeSpacer = styled.div`
  width: ${props => props.size || props.theme.paddings.xxxLarge}px;
  height: ${props => props.size || props.theme.paddings.xxxLarge}px;
`;

export const Spacer = ({ spacerSize, customSize }) => {
  const RENDERERS = {
    small: SmallSpacer,
    medium: MediumSpacer,
    large: LargeSpacer,
    xLarge: XLargeSpacer,
    xxLarge: XXLargeSpacer,
    xxxLarge: XXXLargeSpacer,
  };

  const Renderer = RENDERERS[spacerSize || 'medium'];

  return <Renderer size={customSize} />;
};

Spacer.propTypes = PropTypes.shape({
  spacerSize: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']).isRequired,
  customSize: PropTypes.number,
}).isRequired;
