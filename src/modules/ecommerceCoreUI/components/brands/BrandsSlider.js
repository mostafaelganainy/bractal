import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { XXLargeSpacer } from '~/modules/coreUI/components/layouts/helpers/Spacers';
import { cssMediaMax } from '~/modules/core/utils/cssHelpers/cssMedia';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
const SliderWrapper = styled.div`
  background: #fff;
  width: 100%;
  .slick-slider {
    border: ${props => props.theme.borders.size.normal}px solid ${props => props.theme.borders.color.light};
    border-radius: ${props => props.theme.borders.radius.normal}px;
    height: 178px;
    padding: 50px 60px;
    ${cssMediaMax.mobile`
    height: 123px;
    padding:35px 20px;
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
