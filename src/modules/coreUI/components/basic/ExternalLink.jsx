import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = props => <a href={props.url}>{props.children}</a>;

export default ExternalLink;

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
