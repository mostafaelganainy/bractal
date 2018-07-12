/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import ExternalLink from '~/modules/coreUI/components/basic/ExternalLink';

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  font-size: 25px;
  a {
    color: ${props => props.theme.colors.primary};
  }
`;
const NavSocialMedia = () => (
  <SocialMediaWrapper>
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-fb"
      />
    </ExternalLink>
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-twitter"
      />
    </ExternalLink>
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-shape-26"
      />
    </ExternalLink>
    <ExternalLink url="http://www.google.com">
      <i
        className="icon-instagrame"
      />
    </ExternalLink>
  </SocialMediaWrapper>
);
export default NavSocialMedia;
