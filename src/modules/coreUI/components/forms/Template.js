import styled from 'styled-components';
import t from 'tcomb-form';
import React from 'react';

import { ErrorLabel } from '~/modules/coreUI/components/basic/Labels';
import { LeftAlignedColumn } from '~/modules/coreUI/components/layouts/helpers/Columns';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { SmallSpacer, LargeSpacer, XLargeSpacer } from '../layouts/helpers/Spacers';

const InputElem = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  padding: ${props => props.theme.inputs.padding};

  border: ${props => props.theme.inputs.borderWidth}px solid;
  border-color: ${props => props.theme.inputs.borderColor};
  border-radius: ${props => props.theme.inputs.radius}px;

  outline: none;
  &&:focus{
    outline: none;
  }
  ::placeholder {
    color: ${props => props.theme.inputs.placeholderColor};
  }
  `;

const InputsIntraSpace = styled(LeftAlignedColumn)`
  width: ${props => (props.width ? props.width : '100%')};  
`;

export default {
  textbox: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <InputElem {...locals.attrs} value={locals.value} placeholder={locals.attrs.placeholder} />
    ),
    renderError: locals => (
      <CenterAlignedRow>
        <XLargeSpacer />
        <InputsIntraSpace>
          <SmallSpacer />
          <ErrorLabel>
            {(locals.hasError && locals.error ? (
              locals.error
            ) : (
              <span>&nbsp;</span>
            ))}
          </ErrorLabel>
          <LargeSpacer />
        </InputsIntraSpace>
      </CenterAlignedRow>
    ),
  }),
};
