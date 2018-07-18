import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import Media from 'react-media';
import AppImage from '~/modules/ecommerceCoreUI/components/footer/AppImage';
import FooterLinks from '~/modules/ecommerceCoreUI/components/footer/FooterLinks';
import SocialMedia from '~/modules/ecommerceCoreUI/components/header/headerActions/SocialMedia';
import { mediaQueryMax, cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import { XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';


import DownloadApp from './DownloadApp';
import Payment from './Payment';

const linkList1 = [
  { name: 'Products' },
  { name: 'Shops' },
  { name: 'Homemade' },
  { name: 'Healthy Park' },
  { name: 'Park Education' },
  { name: 'Factories' },
];
const linkList2 = [
  { name: 'Terms & Conditions' },
  { name: 'Privacy & Policy' },
  { name: 'Return & Refund Policy' },
  { name: 'FAQs' },
  { name: 'Ask AYK' },
];
const linkList3 = [
  { name: 'About Us' },
  { name: 'Contact Us' },
  { name: 'Jois As A Business' },
];
const FooterWrapper = styled.div`
  background: #faf9f9;
  padding: 50px 0;
  ${cssMediaMax.tablet`
    padding: 20px 0;
  `}
  .container{
    position: relative;
    display: flex;
    ${cssMediaMax.tablet`
      flex-direction: column;
    `}
  }
  
`;
const ImageWrapper = styled(AppImage)`
  position: absolute;
  right: 0;
  bottom: -45px;
`;
const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    width:33.3%;
  }

`;

const FooterDetails = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
  ${cssMediaMax.xsmall`
    width: 100%;
  `}
`;
const DownloadAppItem = styled(DownloadApp)`
  width: 35%;
  ${cssMediaMax.tablet`
    align-items: flex-start;
    width: 100%;
  `}
  p {
    width:50%;
    ${cssMediaMax.tablet`
      width: 100%;
      text-align: left;
    `}
  }
`;
const SocialMediaItems = styled(SocialMedia)`
  ${cssMediaMax.tablet`
      i {
        font-size: 28px;
      }
    `}
`;

const renderForDesktop = () => (
  <FooterWrapper>
    <Container>
      <FooterDetails>
        <FooterLinksWrapper>
          <div>
            <FooterLinks links={linkList1} />
            <SocialMediaItems />
          </div>
          <div>
            <FooterLinks links={linkList2} />
            <XXLargeSpacer size={33} />
            <Payment />
          </div>
          <FooterLinks links={linkList3} />
        </FooterLinksWrapper>
      </FooterDetails>
      <DownloadAppItem />
      <ImageWrapper />
    </Container>
  </FooterWrapper>
);

const renderForMobile = () => (
  <FooterWrapper>
    <Container>
      <SocialMediaItems title="Follow Us" />
      <XXLargeSpacer />
      <DownloadAppItem />
      <XXLargeSpacer />
      <FooterDetails>
        <FooterLinksWrapper>
          <FooterLinks title="title" links={linkList1} />
          <FooterLinks title="title" links={linkList2} />
        </FooterLinksWrapper>
        <Payment />
      </FooterDetails>
    </Container>
  </FooterWrapper>
);

const FooterContainer = () => (
  <Media query={mediaQueryMax('tablet')}>
    {matches => (
      matches ? (
        renderForMobile()
      ) : (
        renderForDesktop()
      )
    )}
  </Media>
);
export default FooterContainer;
