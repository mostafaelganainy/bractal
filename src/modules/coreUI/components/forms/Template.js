import styled, { css } from 'styled-components';
import t from 'tcomb-form';
import React from 'react';
import Checkbox from '~/modules/coreUI/components/basic/Checkbox';
import { XSmallLabel } from '~/modules/coreUI/components/basic/Labels';
import { XSmallSpacer, SmallSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { TopAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import PhoneNumber from '~/modules/coreUI/components/compound/PhoneNumber';
import CountriesDropdown from '~/modules/coreUI/components/compound/CountriesDropdown';

import Gender from '~/modules/coreUI/components/compound/Gender';

import renderError from './Errors';

const InputElem = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  padding-left: ${props => props.theme.inputs.padding.left}px;
  padding-right: ${props => props.theme.inputs.padding.right}px;
  padding-top: ${props => props.theme.inputs.padding.top}px;
  padding-bottom: ${props => props.theme.inputs.padding.bottom}px;

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

// TODO : Change to a more suitable name (i.e. global state)
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
        tabIndex={locals.attrs.tabIndex}
        type="text"
      />
    ),
    renderError: locals => renderError(locals),
  }),
  password: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <InputElem
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        placeholder={locals.attrs.placeholder}
        type="password"
      />
    ),
    renderError: locals => renderError(locals),
  }),
  phoneNumber: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <PhoneNumber
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        onChange={(value) => {
          locals.onChange(value);
        }}
        placeholder={locals.attrs.placeholder}
      />
    ),
    renderError: locals => renderError(locals),
  }),
  country: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <CountriesDropdown
        {...getGlobalAttrs(locals)}
        {...locals.attrs}
        value={locals.value}
        onChange={value => locals.onChange(value)}
        placeholder={locals.attrs.placeholder}
      />
    ),
    renderError: locals => renderError(locals),
  }),
  gender: t.form.Form.templates.radio.clone({
    renderRadios: locals => <Gender onChange={locals.onChange} />,
    renderError: (locals) => {
      const customErrorTextStyle = css`
        text-align: center;
      `;
      return renderError(locals, customErrorTextStyle);
    },
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
            fontSize={attrs.fontSize}
            {...attrs}
          />
          {attrs.checkboxNote &&
            <React.Fragment>
              <SmallSpacer />
              <TopAlignedRow>
                <XSmallSpacer />
                <XSmallLabel color="subtle" paragraph>
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
