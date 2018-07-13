import React, { Component } from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';

const { Form } = { Form: t.form.Form };
const RadioElm = styled.span`
label{
  margin-right:10px;
  input{
  /* display:none; */
}
img{
  cursor:pointer;
}
}

`;
const Gender = t.enums.of([<img src="jjj.png" alt="alt" />, 'UL'], 'Country');


const Select = t.struct({
  gender: Gender,
});

const myTemplate = t.form.Form.templates.radio.clone({
  renderVertical: locals => (
    <RadioElm>
      <span>Gender</span>
      <label htmlFor="female"><input type="radio" name="gender" value="0" id="female" onChange={locals.onChange} />{locals.isChecked === true ? <img src="/images/AccountManagement/female.png" alt="female" /> : <img src="/images/AccountManagement/female-copy.png" alt="female" />}</label>
      <label htmlFor="male"><input type="radio" name="gender" value="1" id="male" onChange={locals.onChange} />{locals.isChecked === false ? <img src="/images/AccountManagement/male-copy.png" alt="male" /> : <img src="/images/AccountManagement/male-copy.png" alt="male" />}</label>
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
  constructor(props) {
    super(props);
    this.state = {
      genderValue: false,
    };
  }
  onChange = () => {
    // eslint-disable-next-line
    debugger;
    this.setState({ genderValue: this.state.genderValue });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Form
            options={options}
            type={Select}
          />
        </React.Fragment>
      </div>
    );
  }
}
