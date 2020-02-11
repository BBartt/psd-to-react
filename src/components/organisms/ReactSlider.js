import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "components/images/page-intro-img-1.png";
import img2 from "components/images/page-intro-img-2.png";
import Slider from "react-slick";
import { StyledLink } from "components/atoms/StyledLink";

const StyledSlider = styled(Slider)`
  height: 720px;
  width: 100%;
  .slide1,
  .slide2 {
    display: -webkit-flex !important;
    display: -ms-flex !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    text-align: center;
    height: 720px;
    h1 {
      text-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);
      font-weight: 700;
      font-size: 60px;
      color: #ffffff;
    }
  }
  .slide1 {
    background: url(${img1});
    h1 {
      width: 530px;
    }
  }
  .slide2 {
    background: url(${img2});
    h1 {
      width: 810px;
    }
  }
  .slick-dots {
    bottom: 80px;
    li {
      margin: 0px 15px;
      button {
        &::before {
          content: "";
          border: 2px solid #808080;
          border-radius: 50%;
          height: 15px;
          width: 15px;
          color: #fff;
          opacity: 1;
        }
      }
    }
    li.slick-active {
      button {
        &::before {
          background-color: #fff;
          border: none;
        }
      }
    }
  }
`;

function ReactSlider() {
  const settings = {
    draggable: false,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StyledSlider {...settings}>
      <div className="slide1">
        <h1>Let’s turn your idea into digital product</h1>
        <StyledLink href="#">Know more</StyledLink>
      </div>
      <div className="slide2">
        <h1>We create digital products for companies and startups</h1>
        <StyledLink href="#">Know more</StyledLink>
      </div>
    </StyledSlider>
  );
}

export default ReactSlider;
