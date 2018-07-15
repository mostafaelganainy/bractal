import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
      },
    },
  ],
};
const SliderWrapper = styled.div`
  background: #fff;
  width: 100%;
  .slick-slider {
    padding-bottom: 50px;
    .slick-list{
      max-height: 100%;
    }
    .slick-slide img {
      width:100%;
    }
    .slick-dots {
      margin: 20px 0;
      bottom: 0;
      li {
        margin: 0;
        button:before {
          font-size: 10px;
          color: #fb9410;
        }
        &.slick-active button:before {
          font-size: 12px;
          color: #fb9410;
        }
      }
    }
  }
`;
const HomeSlider = ({ children }) => (
  <SliderWrapper>
    <Slider {...settings}>{children}</Slider>
  </SliderWrapper>
);

export default HomeSlider;

HomeSlider.propTypes = {
  children: PropTypes.node.isRequired,
};
