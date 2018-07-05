import React from 'react';
import styled from 'styled-components';

const VerticalSeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.separatorSpacingWidth || '10px'};
  position: absolute;  
`;

const SeparatorRenderer = styled.div`
  height: ${props => props.separatorHeight || '20px'};
  width: ${props => props.separatorWidth || '1px'};
  background-color: ${props => props.color || '#a6a5a5'};
  opacity: ${props => props.opacity || 0.4};
`;

export default props => (
  <VerticalSeparatorContainer {...props}>
    <SeparatorRenderer {...props} />
  </VerticalSeparatorContainer>
);
