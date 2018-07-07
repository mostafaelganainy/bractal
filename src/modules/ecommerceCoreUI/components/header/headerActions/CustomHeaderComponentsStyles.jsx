/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const customTriggerLabelStyles = props => (css`
  font-size: ${props.theme.fonts.sizes.xSmall}px;
`);

export const StyledHeaderDropdownContainer = styled.div`
  .chevron {
    font-size: ${props => 0.75 * props.theme.fonts.sizes.xSmall}px;
    padding-left: ${props => 0.35 * props.theme.fonts.sizes.xSmall}px;    
  }
`;
