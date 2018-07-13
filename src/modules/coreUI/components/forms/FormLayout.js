import React from 'react';
import styled from 'styled-components';

const InputLayout = styled.div`
  width: 100%;
`;

export default locals => (
  <InputLayout>
    {Object.keys(locals.inputs).map((fieldName => (
      <div>{locals.inputs[fieldName]}</div>
    )))}
  </InputLayout>
);
