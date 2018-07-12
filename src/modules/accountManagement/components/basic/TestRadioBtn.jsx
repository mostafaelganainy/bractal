import React from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';

const { Form } = { Form: t.form.Form };
// const Country = t.enums.of(['IT', 'US'], 'Country');

const RadioElm = styled.div`
input{
  /* display:none; */
}
`;
const Country = t.enums.of([<img src="jjj.png" alt="alt" />, 'UL'], 'Country');

const Select = t.struct({
  country: Country,
});
const myTemplate = t.form.Form.templates.radio.clone({
  renderRadios: () => <RadioElm><input type="radio" /><img src="jjj.png" alt="alt" /></RadioElm>,
});

const options = {
  fields: {
    country: {
      // factory: t.form.Radio,
      template: myTemplate,
    },
  },
};

const Radio = () => (
  <React.Fragment>
    <Form
      options={options}
      type={Select}
    />
  </React.Fragment>
);
export default Radio;
