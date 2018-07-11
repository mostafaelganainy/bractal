/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  LargeLabel,
  XSmallLabel,
  SmallLabel,
} from '~/modules/coreUI/components/basic/Labels';

export const PanelTitle = styled(LargeLabel)`
  color:${props => props.theme.colors.labels.important};
  font-weight: bold;
  font-family: 'Panton', sans-serif;
`;

export const PanelSubtitle = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
  font-family: 'Panton', sans-serif;
`;

export const PanelContentLabel = styled(SmallLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const PanelContentMinorLabel = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const ParagraphPanelContent = styled(PanelContentMinorLabel)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  width: 80%;
`;
