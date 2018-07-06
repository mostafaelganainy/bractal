/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  XXLargeLabel,
  // XLargeLabel,
  LargeLabel,
  MediumLabel,
  SmallLabel,
  // XSmallLabel,
} from '~/modules/coreUI/components/basic/Labels';

export const SectionHeader = styled(XXLargeLabel)`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

export const SectionHeaderSubline = styled(LargeLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const TabLabel = styled(MediumLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const MinorDetailsLabel = styled(SmallLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const ImportantMinorDetailsLabel = styled(SmallLabel)`
  color: ${props => props.theme.colors.labels.importnat};
`;
