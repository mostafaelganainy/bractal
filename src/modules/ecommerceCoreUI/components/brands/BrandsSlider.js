import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { cssMediaMax, mediaSizesMax } from '~/modules/core/utils/cssHelpers/cssMedia';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: mediaSizesMax.xsmall,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};
const SliderWrapper = styled.div`
  background: #fff;
  width: 100%;
  .ui.container {
    ${cssMediaMax.xsmall`
      margin: 0 !important;
    `}
  }
  .slick-slider {
    border: ${props => props.theme.borders.size.normal}px solid ${props => props.theme.borders.color.light};
    border-radius: ${props => props.theme.borders.radius.normal}px;
    height: 178px;
    padding: 50px 60px;
    ${cssMediaMax.tablet`
      height: 123px;
      padding:35px 20px;
    `}
    ${cssMediaMax.xsmall`
      border: none;
      background: #faf9f9;
    `}
    .slick-list{
      max-height: 100%;
    }
    .slick-slide {
      text-align: center;
    }
  }
`;
const BrandsSlider = ({ children }) => (
  <SliderWrapper>
    <Container>
      <Slider {...settings}>{children}</Slider>
      <XXLargeSpacer />
    </Container>
  </SliderWrapper>
);

export default BrandsSlider;

BrandsSlider.propTypes = {
  children: PropTypes.node.isRequired,
};
