import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterLinksItems = styled.ul`
  padding-left: 0;
  margin: 0 0 13px;
  li {
    list-style-type: none;
    color: ${props => props.theme.colors.labels.normal};
    font-size: ${props => props.theme.fonts.sizes.small}px;
    margin-bottom: 12px;
  }
`;

const FooterLinks = ({ links }) => (
  <FooterLinksItems>
    {links.map(link => (<li key={link.id} >{link.name}</li>)) }
  </FooterLinksItems>
);

export default FooterLinks;

FooterLinks.propTypes = {
  links: PropTypes.node.isRequired,
};
