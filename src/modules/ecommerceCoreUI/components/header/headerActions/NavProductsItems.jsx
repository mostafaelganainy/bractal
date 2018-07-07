import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';

import { IconOnlyButton } from '~/modules/ecommerceCoreUI/components/basic/Buttons';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import {
  ImportantMinorDetailsLabel,
  MinorDetailsLabel,
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
          <ImportantMinorDetailsLabel uppercase>
            <Trans i18nKey="HeaderProductItems" />
          </ImportantMinorDetailsLabel>
          <MinorDetailsLabel>
            00.00 QAR
          </MinorDetailsLabel>
        </LeftAlignedColumn>
      </CenterAlignedRow>
    );
  }
}

export default translate('aykLayout')(NavProductsItems);
