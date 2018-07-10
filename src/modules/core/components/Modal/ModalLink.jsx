/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeModalFullPath } from '~/modules/core/utils/modalHelpers';

const ModalLink = ({ to, location, children }) => (
  <Link to={makeModalFullPath(location, to)}>
    {children}
  </Link>
);

ModalLink.propTypes = PropTypes.shape({
  to: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}).isRequired;

export default withRouter(ModalLink);