import styled from 'styled-components';
import t from 'tcomb-form';
import React from 'react';
import Checkbox from '~/modules/coreUI/components/basic/Checkbox';

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
        <Checkbox elemID={attrs.id} {...attrs} label={attrs.label} />
      );
    },
    renderError: locals => renderError(locals),
  }),
};
