import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import {
  EmphasizedImportantMinorDetailsLabel,
  EmphasizedMinorDetailsLabel,
} from '~/modules/ecommerceCoreUI/components/basic/Labels';
import { Spacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

class NavProductsItems extends Component {
  state = {};
  render() {
    return (
      <CenterAlignedRow>
        <IconOnlyButton primary iconName="icon-shopping-sad" size={28} />
        <Spacer />
        <LeftAlignedColumn>
          <EmphasizedImportantMinorDetailsLabel uppercase>
            <Trans i18nKey="HeaderProductItems" />
          </EmphasizedImportantMinorDetailsLabel>
          <EmphasizedMinorDetailsLabel>
            00.00 QAR
          </EmphasizedMinorDetailsLabel>
        </LeftAlignedColumn>
      </CenterAlignedRow>
    );
  }
}

export default translate('aykLayout')(NavProductsItems);
