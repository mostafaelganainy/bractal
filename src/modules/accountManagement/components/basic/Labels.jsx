/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  LargeLabel,
  XSmallLabel,
} from '~/modules/coreUI/components/basic/Labels';

export const PanelTitle = styled(LargeLabel)`
  color:${props => props.theme.colors.labels.important};
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