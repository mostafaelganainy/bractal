import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';
import { css } from 'styled-components';
import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import { CenterAlignedRow, TopAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import {
  EmphasizedImportantMinorDetailsLabel,
  EmphasizedMinorDetailsLabel,
} from '~/modules/ecommerceCoreUI/components/basic/Labels';
import { Spacer, XXSmallSpacer, XSmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

// Workaround for the cart icon (UGLY)
const customIconStyle = css`
  margin-top: -5px;
`;

class NavProductsItems extends Component {
  state = {};
  render() {
    return (
      <CenterAlignedRow>
        <IconOnlyButton customIconStyle={customIconStyle} primary iconName="icon-shopping-sad" size={28} />
        <Spacer />
        <TopAlignedRow>
          <LeftAlignedColumn>
            <XSmallSpacer />
            <EmphasizedImportantMinorDetailsLabel uppercase>
              <Trans i18nKey="HeaderProductItems" /> <i className="icon-down-open" />
            </EmphasizedImportantMinorDetailsLabel>
            <XXSmallSpacer />
            <EmphasizedMinorDetailsLabel>
              00.00 QAR
            </EmphasizedMinorDetailsLabel>
          </LeftAlignedColumn>
        </TopAlignedRow>
      </CenterAlignedRow>
    );
  }
}

export default translate('aykLayout')(NavProductsItems);
