/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  LargeLabel,
  XSmallLabel,
  XLargeLabel,
} from '~/modules/coreUI/components/basic/Labels';

export const PanelTitle = styled(LargeLabel)`
  color:${props => props.theme.colors.labels.important};
  font-weight: bold;
`;
export const SecondTitle = styled(XLargeLabel)`
  color:${props => props.theme.colors.labels.normal};
  font-weight: bold;
`;
export const PanelSubtitle = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const PanelContent = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const ParagraphPanelContent = styled(PanelContent)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 80%;

`;
export const CenteredParagraphPanelContent = styled(PanelContent)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 80%;
  text-align:center;
`;
export const ParagraphFooterContent = styled(PanelContent)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 100%;
  background-color: #faf9f9;
  display: flex;
  padding: 11px;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
