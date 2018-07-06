import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const lengths = {
  short: '30%',
  normal: '50%',
  full: '100%',
};

const getLength = (props) => {
  let length = 'normal';
  if (props.separatorLength) {
    length = props.separatorLength;
  }

  return lengths[length] || '50%';
};

const getWeight = (props) => {
  let weight = 'normal';
  if (props.separatorWeight) {
    weight = props.separatorWeight;
  }

  return props.theme.borders[weight].size;
};

const getPadding = (props) => {
  let padding = 'normal';

  if (props.spacerWidth) {
    padding = props.spacerWidth;
  }

  return props.theme.paddings[padding];
};

const VerticalSeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: ${props => getPadding(props) || 10};
  padding-right: ${props => getPadding(props) || 10};
  position: relative;  
`;

const SeparatorRenderer = styled.div`
  height: ${props => getLength(props) || '50%'};
  width: ${props => getWeight(props) || '1px'};
  background-color: ${props => props.color || '#a6a5a5'};
  opacity: ${props => props.opacity || 0.4};
`;

const VerticalSeparator = props => (
  <VerticalSeparatorContainer {...props}>
    <SeparatorRenderer {...props} />
  </VerticalSeparatorContainer>
);

VerticalSeparatorContainer.propTypes = PropTypes.shape({
  spacerWidth: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']),
  separatorWeight: PropTypes.oneOf(['thin', 'normal', 'thick']),
  separatorLength: PropTypes.oneOf(['short', 'normal', 'full']),
}).isRequired;

export default VerticalSeparator;
