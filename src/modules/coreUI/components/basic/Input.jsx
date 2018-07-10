// import React from 'react';


// const InputElem = styled.input`
//   width: ${props => (props.width ? props.width : '100%')};
//   padding: 12px 20px;
//   margin: 8px 0;
//   border: 1px solid #ccc;
//   border-radius: ${props => (props.border_Radius ? props.border_Radius : '0px')};
//   box-sizing: border-box;
// `;

// const Input = props => (
//   <InputElem type={props.type} placeholder={props.placeholder} {...props} />
// );

// Input.propTypes = PropTypes.shape({
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
// }).isRequired;

// export default Input;

import React, { Component } from 'react';
import t from 'tcomb-form';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Form } = { Form: t.form.Form };


const Person = t.struct({
  name: t.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    name: {
      attrs: {
        autoFocus: true,
        placeholder: t.placeholder,
        className: 'Input',
      },
    },
  },
};

export default class Input extends Component {
  render() {
    return (
      <div>
        <Form
          ref={(ref) => { this.Form = ref; }}
          options={options}
          type={Person}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
// const InputElem = styled.input`
//   width: ${props => (props.width ? props.width : '100%')};
//   padding: 12px 20px;
//   margin: 8px 0;
//   border: 1px solid #ccc;
//   border-radius: ${props => (props.border_Radius ? props.border_Radius : '0px')};
//   box-sizing: border-box;
// `;
Input.propTypes = PropTypes.shape({
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;
