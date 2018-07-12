
import React, { Component } from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Form } = { Form: t.form.Form };

const InputElem = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid rgba(34, 36, 38, 0.15);
  /* border-radius: ${props => (props.border_Radius ? props.border_Radius : '0px')}; */
  border-radius:20px;
  box-sizing: border-box;
  outline: none;
  &&:focus{
    outline: none;
  }
`;

const FormLayout = locals => (
  <div className="InputLayout" style={{ width: '90%' }}>
    {Object.keys(locals.inputs).map(fieldName => (
      <div>{locals.inputs[fieldName]}</div>
    ))}
  </div>
);

const Templates = {
  textbox: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <InputElem value={locals.value} placeholder={locals.attrs.placeholder} />
    ),
  }),
};

const getTcombOptionsFromRawOptions = (rawOptions) => {
  const tcombOptions = {
    template: FormLayout,
    auto: 'placeholders',
    fields: {},
  };

  rawOptions.forEach((option) => {
    tcombOptions.fields[option.name] = {
      template: Templates[option.input_type],
      attrs: {
        placeholder: option.placeholder,
      },
    };
  });

  return tcombOptions;
};

const getTcombTypesFromRawOptions = (rawOptions) => {
  const tcombTypesObject = {};

  rawOptions.forEach((option) => {
    tcombTypesObject[option.name] = t[option.tcomb_type];
  });

  return t.struct(tcombTypesObject);
};

export default class RelayForm extends Component {
  render() {
    const { options } = this.props;
    const tcombOptions = getTcombOptionsFromRawOptions(options);
    const tcombTypes = getTcombTypesFromRawOptions(options);
    return (
      <Form
        ref={(ref) => { this.Form = ref; }}
        options={tcombOptions}
        type={tcombTypes}
        onChange={this.props.onChange}
      />
    );
  }
}

RelayForm.propTypes = PropTypes.shape({
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    input_type: PropTypes.string.isRequired,
    tcomb_type: PropTypes.string.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;
