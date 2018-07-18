import React from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { SmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { SmallLabel } from '~/modules/coreUI/components/basic/Labels';
import ModalLink from '~/modules/core/components/Modal/ModalLink';
import { cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

// TODO : Externalize the background color to the theme
export const ParagraphFooterContent = styled(CenterAlignedRow)`
  width: 100%;
  display: flex;

  ${cssMediaMax.tablet`
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
  `}

  line-height: ${props => props.theme.fonts.sizes.xSmall * 1.7}px;
  font-size: ${props => props.theme.fonts.sizes.small}px;
  
  background-color: #faf9f9;
  
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
