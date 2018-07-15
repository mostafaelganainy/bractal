/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  XXLargeLabel,
  // XLargeLabel,
  LargeLabel,
  MediumLabel,
  SmallLabel,
  XSmallLabel,
} from '~/modules/coreUI/components/basic/Labels';
import { cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

// --------------- COMMON ---------------- //
export const SectionHeader = styled(XXLargeLabel)`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: 'Panton', sans-serif;
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

export const SmallTitle = styled(SmallLabel)`
  color: ${props => props.theme.colors.labels.important};
  font-weight: bold;
  text-transform: uppercase;
  font-family: Panton ,sans-serif;
  letter-spacing: -0.5px;
  ${cssMediaMax.tablet`
    font-size: ${props => props.theme.fonts.sizes.large}px;
  `}
`;

// --------------- HEADER ---------------- //

// --------------- HOME PAGE ------------ //
