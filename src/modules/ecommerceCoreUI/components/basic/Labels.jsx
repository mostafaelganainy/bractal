/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  XXLargeLabel,
  // XLargeLabel,
  LargeLabel,
  MediumLabel,
  // SmallLabel,
  XSmallLabel,
} from '~/modules/coreUI/components/basic/Labels';

// --------------- COMMON ---------------- //
export const SectionHeader = styled(XXLargeLabel)`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

export const SectionHeaderSubtitle = styled(LargeLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const TabLabel = styled(MediumLabel)`
  color: ${props => props.theme.colors.labels.normal};
`;

export const MinorDetailsLabel = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.subtle};
`;

export const EmphasizedMinorDetailsLabel = styled(MinorDetailsLabel)`
  font-weight: bold;
`;

export const ImportantMinorDetailsLabel = styled(XSmallLabel)`
  color: ${props => props.theme.colors.labels.important};
`;

export const EmphasizedImportantMinorDetailsLabel = styled(ImportantMinorDetailsLabel)`
  font-weight: bold;
`;

// --------------- HEADER ---------------- //

// --------------- HOME PAGE ------------ //
