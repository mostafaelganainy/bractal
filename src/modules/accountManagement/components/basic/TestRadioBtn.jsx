import React, { Component } from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';

const { Form } = { Form: t.form.Form };
const RadioElm = styled.span`
span{
  position: relative;
    top: -14px;
    margin-right: 12px;
}
  label{
    margin-right:10px;
      input{
      display:none;
      }
     img{
      cursor:pointer;
    }
  }
`;

const Gender = t.enums({
  M: 'Male',
  F: 'Female',
});

const Person = t.struct({
  gender: Gender, // enum
});

const myTemplate = t.form.Form.templates.radio.clone({
  renderVertical: () => (
    <RadioElm>
      <span>Gender</span>
      <label htmlFor="female"><input type="radio" name="gender" value="0" id="female" /><i className="icon-male" /></label>
      <label htmlFor="male"><input type="radio" name="gender" value="1" id="male" /><i className="icon-female" /></label>
    </RadioElm>
  ),
});

const options = {
  fields: {
    gender: {
      template: myTemplate,
    },
  },
};


export default class Radio extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Form
            options={options}
            type={Person}
            onChange={this.onChange}
          />
        </React.Fragment>
      </div>
    );
  }
}
