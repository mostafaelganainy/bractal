
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

const Type = t.struct({
  name: t.String,
});

const myTemplate = t.form.Form.templates.textbox.clone({
  renderInput: () => <div className="ccc"> <InputElem placeholder="Email/ Mobile Number" /> </div>,
});
const InputLayout = locals => (
  <div className="InputLayout" style={{ width: '80%' }}>
    <div>{locals.inputs.name}</div>
  </div>
);

const options = {
  template: InputLayout,
  auto: 'placeholders',
  fields: {
    name: {
      template: myTemplate,
      attrs: {
        className: 'Input',
      },
    },
  },
};


export default class Input extends Component {
  render() {
    return (
      <Form
        ref={(ref) => { this.Form = ref; }}
        options={options}
        type={Type}
        onChange={this.props.onChange}
      />
    );
  }
}

Input.propTypes = PropTypes.shape({
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;
