import React from 'react';
import t from 'tcomb-form';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const RadioElm = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right:10px;
  }
  label {
    margin-right:10px;
    cursor:pointer;
    input{
      display:none;
    }
  }
`;
const Input = styled.input`
  &&:checked+i{
   color: ${props => props.theme.colors.primary};
   opacity:1;
  }
`;
const Gender = t.enums({
  M: 'Male',
  F: 'Female',
});
const Icon = styled.i`
  color:gray;
  font-size: ${props => props.theme.fonts.sizes.xxLarge}px;
  opacity:0.7;
  cursor:pointer;
`;
const Person = t.struct({
  gender: Gender, // enum
});
console.log(Person);

const handleOptionChange = (event, onChange) => {
  onChange(event.target.value);
};

const Radio = ({ onChange }) => (
  <RadioElm>
    <span>Gender :</span>
    <label htmlFor="male">
      <Input
        type="radio"
        name="gender"
        value="male"
        id="male"
        onChange={event => handleOptionChange(event, onChange)}
      />
      <Icon className="icon-male" />
    </label>
    <label htmlFor="female">
      <Input
        type="radio"
        name="gender"
        value="female"
        id="female"
        onChange={event => handleOptionChange(event, onChange)}
      />
      <Icon className="icon-female" />
    </label>
  </RadioElm>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Radio;
