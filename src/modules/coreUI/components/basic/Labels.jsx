/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const getColor = (props) => {
  if (props.color) {
    if (props.theme.colors.labels[props.color]) {
      return props.theme.colors.labels[props.color];
    }
    return props.color;
  }
  return props.theme.colors.labels.normal;
};

export const Label = styled.span`
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  color: ${props => getColor(props)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  a {
    color: ${props => props.theme.colors.link};
    border-bottom: solid 1px;
    padding-bottom: 1px;
    padding-top: 1px;
  }
`;

export const XXLargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xxLarge}px;
  line-height: ${props => props.theme.fonts.sizes.xxLarge}px;
`;

export const XLargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xLarge}px;
  line-height: ${props => props.theme.fonts.sizes.xLarge}px;
`;

export const LargeLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.large}px;
  line-height: ${props => props.theme.fonts.sizes.large}px;
`;

export const MediumLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.medium}px;
  line-height: ${props => props.theme.fonts.sizes.medium + 6}px;
`;

export const SmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.small}px;
  line-height: ${props => props.theme.fonts.sizes.small + 4}px;
`;

export const XSmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xSmall}px;
  line-height: ${props => props.theme.fonts.sizes.xSmall + 4}px;
`;

export const XXSmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xxSmall}px;
  line-height: ${props => props.theme.fonts.sizes.xxSmall + 4}px;
`;
export const XXXSmallLabel = styled(Label)`
  font-size: ${props => props.theme.fonts.sizes.xxxSmall}px;
  line-height: ${props => props.theme.fonts.sizes.xxxSmall}px;
`;

export const ErrorLabel = styled.div`
  font-size: ${props => props.theme.fonts.sizes.xxSmall}px;
  line-height: ${props => props.theme.fonts.sizes.xxSmall + 4}px;
  color: ${props => props.theme.colors.error};
`;
