import React from 'react';
import i18next from 'i18next';
import styled from 'styled-components';

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

const FlexSpacer = styled.div`
  flex-grow: 1;
`;

const CenterContent = styled(CenterAlignedRow)`
  flex-grow: 6;
`;

const MainContent = styled(CenterAlignedRow)`
  flex-grow: 1;
`;

const NavProductsSearch = () => (
  <MainContent>
    <FlexSpacer />
    <CenterContent>
      <StyledProductsSearch>
        <DepartmentsDropdown departments={departments} />
        <StyledProductsSearchInput
          action={{ icon: { className: 'icon-lens' } }}
          placeholder={i18next.t('aykLayout:header.search')}
        />
      </StyledProductsSearch>
    </CenterContent>
    <FlexSpacer />
  </MainContent>
);

export default NavProductsSearch;
