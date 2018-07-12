import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';


const FooterLinksItems = styled.div`
  div {
    color: ${props => props.theme.colors.labels.normal};
    font-size: ${props => props.theme.fonts.sizes.small}px;
  }
`;

const FooterLinks = ({ links }) => (
  <FooterLinksItems>
    {links.map(link => (
      <div key={link.id} >{link.name} <LargeSpacer size={12} /> </div>
    ))}
    <LargeSpacer />
  </FooterLinksItems>
);

export default FooterLinks;

FooterLinks.propTypes = {
  links: PropTypes.node.isRequired,
};
