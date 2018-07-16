/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const getJustifyContent = (props) => {
  if (props.spaceAround) {
    return 'space-around';
  } else if (props.spaceBetween) {
    return 'space-between';
  } else if (props.justifyCenter) {
    return 'center';
  }

  return null;
};

const getAlignItems = (props) => {
  if (props.stretchAlign) {
    return 'stretch';
  } else if (props.centerAlign) {
    return 'center';
  } else if (props.topAligned) {
    return 'flex-start';
  }

  return null;
};

export const Row = styled.div`
  width: ${props => (props.fullWidth ? '100%' : null)};
  height: ${props => (props.fullHeight ? '100%' : null)};
  display: flex;
  flex-direction: row;
  flex-grow: ${props => (props.grow ? 1 : null)};
  justify-content: ${props => getJustifyContent(props) || 'space-around'};
  align-items: ${props => getAlignItems(props) || 'center'};  
`;

export const CenterAlignedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TopAlignedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const BottomAlignedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
