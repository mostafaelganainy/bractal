/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  LargeLabel,
  XSmallLabel,
  XXSmallLabel,
  SmallLabel,
  XLargeLabel,
} from '~/modules/coreUI/components/basic/Labels';

export const PanelTitle = styled(LargeLabel)`
  color:${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: 'Panton', sans-serif;
`;
export const SecondTitle = styled(XLargeLabel)`
  color:${props => props.theme.colors.labels.normal};
  font-weight: bold;
`;
export const PanelSubtitle = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
  font-family: 'Panton', sans-serif;
`;

export const PanelContentLabel = styled(SmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const PanelContentMinorLabel = styled(XXSmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const ParagraphPanelContent = styled(PanelContentMinorLabel)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 80%;

`;
export const CenteredParagraphPanelContent = styled(PanelContentLabel)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 80%;
  text-align:center;
`;

export const ParagraphFooterContent = styled(PanelContentLabel)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 100%;
  background-color: #faf9f9;
  display: flex;
  padding: 11px;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
