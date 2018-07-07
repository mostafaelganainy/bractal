/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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
  text-align: left;
`;
