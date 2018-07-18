import React from 'react';
import { Trans } from 'react-i18next';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { SmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { SmallLabel } from '~/modules/coreUI/components/basic/Labels';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import styled from 'styled-components';

// TODO : Externalize the background color to the theme
export const ParagraphFooterContent = styled(CenterAlignedRow)`
  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  font-size: ${props => props.theme.fonts.sizes.small}px;
  width: 100%;
  background-color: #faf9f9;
  display: flex;
  padding: 11px;
  justify-content: center;

  border-bottom-left-radius: ${props => props.theme.borders.radius.normal}px;
  border-bottom-right-radius: ${props => props.theme.borders.radius.normal}px;
`;


export default () => (
  <ParagraphFooterContent>
    <SmallLabel>
      <Trans i18nKey="verifyAccount.footerTxt" />
    </SmallLabel>
    <SmallSpacer />
    <ModalLink to="/accountManagement/login">
      <Trans i18nKey="verifyAccount.footerLink" />
    </ModalLink>
  </ParagraphFooterContent>
);
