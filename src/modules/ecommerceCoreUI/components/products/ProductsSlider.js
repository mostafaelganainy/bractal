import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { mediaSizesMax } from '~/modules/core/utils/cssHelpers/cssMedia';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: mediaSizesMax.desktop,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
      },
    },
    {
      breakpoint: mediaSizesMax.tablet,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        arrows: false,
      },
    },
    {
      breakpoint: mediaSizesMax.mobile,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
        arrows: false,
      },
    },
    {
      breakpoint: mediaSizesMax.xsmall,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        arrows: false,
      },
    },
  ],
};
const SliderWrapper = styled.div`
  background: #fff;
  width: 100%;
  .slick-slider {
    text-align: center;
    .slick-track {
      margin-bottom: 50px !important;
    }
    .slick-dots {
      margin-bottom: 40px;
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
    .slick-prev:before {
      content: "\\e802";
      font-family: fontello, sans-serif;
    }
    .slick-next:before {
      content: "\\e801";
      font-family: fontello, sans-serif;
    }
    .slick-prev,
    .slick-next {
      width: 50px;
      height: 50px;
      text-align: center;
      border-radius: 50%;
      display: inline-block;
      color: #7f7f7f;
      background-color: #fff;
      z-index: 1;
      top: 47.4%;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
      &:before {
        font-size: 47px;
        color: rgba(0, 0, 0, 0.5);
      }
      &:hover:before {
        color: #fb9410;
      }
    }
    .slick-prev {
      left: -8px;
      padding-right: 3px;
    }
    .slick-next {
      right: -8px;
      padding-left: 3px;
    }
    .slick-disabled {
      color: #e5e5e5;
      cursor: not-allowed;
      &:hover:before {
        color: #e5e5e5;
        opacity: 1;
      }
    }
    .slick-slide > div {
      margin: 24px 15px !important;
    }
  }
`;
const ProductsSlider = ({ children }) => (
  <SliderWrapper>
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  </SliderWrapper>
);

export default ProductsSlider;

ProductsSlider.propTypes = {
  children: PropTypes.node.isRequired,
};
