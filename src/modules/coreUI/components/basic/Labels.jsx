/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Label = styled.span`
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`;

export const XXLargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xxLarge}px;
`;

export const XLargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xLarge}px;
`;

export const LargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.large}px;
`;

export const MediumLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.medium}px;
`;

export const SmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.small}px;
`;

export const XSmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xSmall}px;
  line-height: ${props => props.theme.fonts.sizes.xSmall}px;
`;
