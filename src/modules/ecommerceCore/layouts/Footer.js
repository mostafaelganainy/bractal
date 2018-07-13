import React from 'react';
import styled from 'styled-components';
import Newsletter from '../../ecommerceCoreUI/components/footer/Newsletter';
import FooterContainer from '../../ecommerceCoreUI/components/footer/FooterContainer';
import Copyright from '../../ecommerceCoreUI/components/footer/Copyright';

const FooterConatiner = styled.div`
background: #fff;
`;
const Footer = () => (
  <FooterConatiner>
    <Newsletter />
    <FooterContainer />
    <Copyright />
  </FooterConatiner>
);

export default Footer;
