/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column, CenterAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { PanelTitle, PanelSubtitle } from '~/modules/accountManagement/components/basic/Labels';
import { SmallSpacer, XXXXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';

export const PanelRoot = styled(Column)`
  width: 248px;
`;

const Panel = ({ title, subTitle, children }) => (
  <PanelRoot topAligned topJustified>
    <CenterAlignedColumn>
      <PanelTitle uppercase>
        {title}
      </PanelTitle>
      <SmallSpacer />
      <PanelSubtitle>
        {subTitle}
      </PanelSubtitle>
    </CenterAlignedColumn>
    <XXXXXLargeSpacer />
    <Column fullWidth centerAligned centerJustified grow>
      { children }
    </Column>
  </PanelRoot>
);

Panel.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}).isRequired;

export default Panel;
