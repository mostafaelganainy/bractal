
import React, { Component } from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { XXXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';


const { Form } = { Form: t.form.Form };

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

const InputLayout = styled.div`
  width: 100%;
`;

const FormLayout = locals => (
  <InputLayout>
    {Object.keys(locals.inputs).map(((fieldName, index) => (
      <React.Fragment>
        <div>{locals.inputs[fieldName]}</div>
        {index < Object.keys(locals.inputs).length - 1 ? <XXXLargeSpacer /> : null }
      </React.Fragment>
    )))}
  </InputLayout>
);

const Templates = {
  textbox: t.form.Form.templates.textbox.clone({
    renderInput: locals => (
      <InputElem {...locals.attrs} value={locals.value} placeholder={locals.attrs.placeholder} />
    ),
  }),
};

const getTcombOptionsFromRawOptions = (rawOptions) => {
  const tcombOptions = {
    template: FormLayout,
    auto: 'placeholders',
    error: (value, path, context) => { console.log(value, path, context); return 'ERROR'; },
    help: 'I like you all',
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
  state = {
    value: {
      username: 'Giulio',
      password: 'Canti',
    },
  };

  onChange = (value, path) => {
    this.setState({ value });
    this.Form.getComponent(path).validate();
  }

  save = () => {
    const value = this.Form.getValue();
    this.Form.validate();
    if (value) {
      console.log(value);
    }
  }

  render = () => {
    const { options } = this.props;
    const tcombOptions = getTcombOptionsFromRawOptions(options);
    const tcombTypes = getTcombTypesFromRawOptions(options);
    return (
      <React.Fragment>
        <Form
          ref={(ref) => { this.Form = ref; }}
          options={tcombOptions}
          type={tcombTypes}
          value={this.state.value}
          onChange={this.onChange}
        />
      </React.Fragment>
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
