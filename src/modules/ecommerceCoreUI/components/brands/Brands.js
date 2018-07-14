import React from 'react';
import styled from 'styled-components';
import { XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import BrandsSlider from './BrandsSlider';

const BrandsSliderItems = styled.div`
  img {
    width: 50% !important;
  }
`;

const Brands = () => (
  <BrandsSliderItems>
    <XXLargeSpacer />
    <BrandsSlider>
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
      <img src="images/Header/app-image.png" alt="" />
    </BrandsSlider>
    <XXLargeSpacer />
  </BrandsSliderItems>
);


export default Brands;
