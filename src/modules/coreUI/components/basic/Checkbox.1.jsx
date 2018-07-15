import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CenterAlignedRow } from '~/modules/coreUI/components/layouts/helpers/Rows';
import { SmallLabel } from './Labels';

const VisibleCheckbox = styled.div`
  cursor: pointer;
  content: "";
  height: 15px;
  width: 15px;
  background-color: white;
  border: 1px solid ${props => props.theme.colors.labels.subtle};
  border-radius: 3px;
  margin-right: 6px;
  margin-top: -1px;
`;

const StylableCheckbox = styled.input`
  position: absolute;
  left: -999em;  

  &:checked + label::after {
    content: '';
    position: absolute;
    width: 9px;
    height: 6px;
    background: rgba(0,0,0,0);
    bottom: 6px;
    left: 3px;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }

  & + label::before {
    cursor: pointer;
    content: "";
    height: 15px;
    width: 15px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.labels.subtle};
    border-radius: 3px;
    margin-right: 6px;
    margin-top: -1px;
  }

  &:focus + label::before {
    border: 2px solid ${props => props.theme.colors.primary};
  }
  
  & + label {
    margin-left: 2px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.labels.normal};
  }
`;

const Checkbox = props => (
  <CenterAlignedRow>
    <VisibleCheckbox />
    <StylableCheckbox type="checkbox" id={props.elemID} {...props} />
    <label htmlFor={props.elemID}>
      <SmallLabel>
        {props.label}
      </SmallLabel>
    </label>
  </CenterAlignedRow>
);

Checkbox.propTypes = PropTypes.shape({
  elemID: PropTypes.string.isRequired,
}).isRequired;

export default Checkbox;
