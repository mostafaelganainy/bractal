/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Spacer = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export const JustifiedContent = `
  display: flex;
  justify-content: space-between;
`;

export const LeftAlignedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  .label {
    margin-left: 0;
  }
`;
