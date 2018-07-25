import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { SmallTitle } from '~/modules/ecommerceCoreUI/components/basic/Labels';


const FooterLinksItems = styled.div`
  .link-item {
    color: ${props => props.theme.colors.labels.normal};
    font-size: ${props => props.theme.fonts.sizes.small}px;
  }
`;

const FooterLinks = ({ links, title }) => (
  <FooterLinksItems>
    {title ?
      <React.Fragment>
        <SmallTitle>{title}</SmallTitle>
        <LargeSpacer size={12} />
      </React.Fragment>
      :
      ' ' }
    {links.map(link => (
      <div className="link-item" key={link.name} >{link.name} <LargeSpacer size={12} /> </div>
    ))}
  </FooterLinksItems>
);

export default FooterLinks;

FooterLinks.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

FooterLinks.defaultProps = {
  title: ' ',
};
