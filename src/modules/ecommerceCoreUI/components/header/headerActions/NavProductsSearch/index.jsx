import React from 'react';
import i18next from 'i18next';

import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import DepartmentsDropdown from './DepartmentsDropdown';

import { StyledProductsSearchInput, StyledProductsSearch } from '../CustomHeaderComponentsStyles';

const departments = [
  {
    text: 'All Products',
    value: 'all-products',
  },
  {
    text: 'Cosmotics',
    value: 'cosmotics',
  },
];

const NavProductsSearch = () => (
  <StyledProductsSearch>
    <CenterAlignedRow>
      <DepartmentsDropdown departments={departments} />
      <StyledProductsSearchInput
        action={{ icon: { className: 'icon-lens' } }}
        placeholder={i18next.t('aykLayout:header.search')}
      />
    </CenterAlignedRow>
  </StyledProductsSearch>
);

export default NavProductsSearch;
