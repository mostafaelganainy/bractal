import React from 'react';
import styled from 'styled-components';
import { cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';
import HomeSlider from './HomeSlider';

const View = styled.img`
  border-radius:5px;
`;
const ViewDetails = styled.div`
  position: absolute;
  left: 60px;
  top: 0;
  height: 100%;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 50%;
  ${cssMediaMax.tablet`
    left: 20px;
  `};
`;
const Item = styled.div`
  position: relative;
  padding: 0 10px;
  &:focus {
    border: none;
    outline: 0;
  }
`;
const Header = styled.div`
  color: ${props => props.theme.colors.named.white};
  font-size: ${props => props.theme.fonts.sizes.xxxLarge}px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.1;
  ${cssMediaMax.tablet`
    font-size: ${props => props.theme.fonts.sizes.xLarge}px;
  `};
  ${cssMediaMax.xsmall`
    font-size: 23px;
  `};
`;
const SubHeader = styled.div`
  color: ${props => props.theme.colors.named.white};
  font-size:  ${props => props.theme.fonts.sizes.xxLarge}px;
  letter-spacing: -0.4px;
  line-height: 1.1;
  ${cssMediaMax.xsmall`
    font-size: 18px;
  `};
`;
const Button = styled.button`
  background-color: ${props => props.theme.colors.named.white};
  color: rgba(0,0,0,0.7); 
  font-size: 18px; 
  border-radius: 5px; 
  border: none;
  padding: 11px 18px;
  cursor: pointer;
  ${cssMediaMax.xsmall`
    font-size: 13px;
    padding: 9px 15px;
  `};
`;
const HomeMainSlider = () => (
  <HomeSlider>
    <Item>
      <View src="/images/slider-img.png" alt="" />
      <ViewDetails className="details">
        <Header>check the latest</Header>
        <SubHeader>At Nike Shop</SubHeader>
        <Button>Shop now</Button>
      </ViewDetails>
    </Item>
    <Item>
      <View src="/images/slider-img.png" alt="" />
      <ViewDetails className="details">
        <Header>check the latest</Header>
        <SubHeader>At Nike Shop</SubHeader>
        <Button>Shop now</Button>
      </ViewDetails>
    </Item>
    <Item>
      <View src="/images/slider-img.png" alt="" />
      <ViewDetails className="details">
        <Header>check the latest</Header>
        <SubHeader>At Nike Shop</SubHeader>
        <Button>Shop now</Button>
      </ViewDetails>
    </Item>
    <Item>
      <View src="/images/slider-img.png" alt="" />
      <ViewDetails className="details">
        <Header>check the latest</Header>
        <SubHeader>At Nike Shop</SubHeader>
        <Button>Shop now</Button>
      </ViewDetails>
    </Item>
  </HomeSlider>
);

export default HomeMainSlider;
