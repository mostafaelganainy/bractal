import styled from 'styled-components';
import t from 'tcomb-form';
import React from 'react';
import Checkbox from '~/modules/coreUI/components/basic/Checkbox';
import { XSmallLabel } from '~/modules/coreUI/components/basic/Labels';
import { XSmallSpacer, SmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { TopAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import renderError from './Errors';

const InputElem = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  padding: ${props => props.theme.inputs.padding};

  border: ${props => props.theme.inputs.borderWidth}px solid;
  border-color: ${props => props.theme.inputs.borderColor};
  border-radius: ${props => props.theme.inputs.radius}px;

  outline: none;

  &&:focus{
    outline: none;
    border-color: ${props => props.theme.inputs.borderColorActive};
  }
  ::placeholder {
    color: ${props => props.theme.inputs.placeholderColor};
  }
`;


const getGlobalAttrs = locals => ({
  onKeyUp: locals.context.onKeyUp,
});

export default {
  textbox: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <InputElem
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        placeholder={locals.attrs.placeholder}
      />
    ),
    renderError: locals => renderError(locals),
  }),
  checkbox: t.form.Form.templates.checkbox.clone({
    renderCheckbox: (locals) => {
      const attrs = t.form.Form.templates.checkbox.getAttrs(locals);

      return (
        <React.Fragment>
          <Checkbox
            elemID={attrs.id}
            bold={attrs.importantLabel}
            label={attrs.label}
            {...attrs}
          />
          {attrs.checkboxNote &&
            <React.Fragment>
              <SmallSpacer />
              <TopAlignedRow>
                <XSmallSpacer />
                <XSmallLabel color="subtle">
                  {attrs.checkboxNote}
                </XSmallLabel>
              </TopAlignedRow>
            </React.Fragment>
          }
        </React.Fragment>
      );
    },
    renderError: locals => renderError(locals),
  }),
};
