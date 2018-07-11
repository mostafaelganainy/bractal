import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CloseIcon = styled.i`
    font-size: 17px !important;
    color: white;
    cursor: pointer;
    z-index: 1;
`;

const Icon = props => (
  <CloseIcon className={props.className} {...props} onClick={props.onClick} />
);

Icon.propTypes = PropTypes.shape({
  className: PropTypes.string.isRequired,
}).isRequired;

export default Icon;
