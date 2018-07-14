/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExternalLink from '~/modules/coreUI/components/basic/ExternalLink';
import { Spacer, LargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { SmallTitle } from '~/modules/ecommerceCoreUI/components/basic/Labels';


const SocialMediaWrapper = styled.div`
  display: flex;
  font-size: 25px;
  a {
    color: ${props => props.theme.colors.primary};
  }
`;
const NavSocialMedia = props => (
  <SocialMediaWrapper {...props} >
    {props.title ?
      <React.Fragment>
        <SmallTitle>{props.title}</SmallTitle>
        <LargeSpacer size={12} />
      </React.Fragment>
      :
      ' ' }
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-fb"
      />
    </ExternalLink>
    <Spacer />
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-twitter"
      />
    </ExternalLink>
    <Spacer />
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-shape-26"
      />
    </ExternalLink>
    <Spacer />
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-instagrame"
      />
    </ExternalLink>
  </SocialMediaWrapper>
);
export default NavSocialMedia;

NavSocialMedia.propTypes = {
  title: PropTypes.string,
};

NavSocialMedia.defaultProps = {
  title: ' ',
};
