/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const getJustifyContent = (props) => {
  if (props.spaceAround) {
    return 'space-around';
  } else if (props.spaceBetween) {
    return 'space-between';
  } else if (props.stretchJustify) {
    return 'stretch';
  } else if (props.topJustified) {
    return 'flex-start';
  } else if (props.centerJustified) {
    return 'center';
  }

  return null;
};

const getAlignItems = (props) => {
  if (props.alignCenter) {
    return 'center';
  } else if (props.stretchAlign) {
    return 'stretch';
  }

  return null;
};

export const Column = styled.div`
  width: ${props => (props.fullWidth ? '100%' : null)};
  display: flex;
  flex-direction: column;
  align-items: ${props => getAlignItems(props) || 'center'};  
  justify-content: ${props => getJustifyContent(props) || 'space-around'};  
  flex-grow: ${props => (props.grow ? 1 : 0)};
`;
export const LeftAlignedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: ${props => props.paddingTop || 0}px;
`;

export const CenterAlignedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const RightAlignedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
