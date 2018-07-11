/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const getJustifyContent = (props) => {
  if (props.spaceAround) {
    return 'space-around';
  } else if (props.spaceBetween) {
    return 'space-between';
  }

  return null;
};

const JustifiedDiv = styled.div`
  justify-content: ${props => getJustifyContent(props) || 'space-around'}
`;

export const CenterAlignedRow = styled(JustifiedDiv)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TopAlignedRow = styled(JustifiedDiv)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const BottomAlignedRow = styled(JustifiedDiv)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
