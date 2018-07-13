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
  renderVertical: locals => (
    <RadioElm>
      <span>Gender</span>
      <label htmlFor="female"><input type="radio" name="gender" value="0" id="female" />{locals.isChecked === true ? <img src="/images/AccountManagement/female-copy.png" alt="female" /> : <img src="/images/AccountManagement/female.png" alt="female" />}</label>
      <label htmlFor="male"><input type="radio" name="gender" value="1" id="male" />{locals.isChecked === false ? <img src="/images/AccountManagement/male-copy.png" alt="male" /> : <img src="/images/AccountManagement/male.png" alt="male" />}</label>
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
