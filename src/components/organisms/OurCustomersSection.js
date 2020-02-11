import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import customerPic from "components/images/customer-picture.png";
import arrowLeft from "components/images/arrow-left.png";
import arrowRight from "components/images/arrow-right.png";
import quote from "components/images/quote.png";
import { StyledSectionH2 } from "components/atoms/StyledSectionH2";
import { StyledSectionParagraph } from "components/atoms/StyledSectionParagraph";
import { StyledSectionFlexColumnCenter } from "components/atoms/StyledSectionFlexColumnCenter";

const StyledSection = styled(StyledSectionFlexColumnCenter)`
  height: 650px;

  .slick-slider {
    margin-top: 50px;
    height: 415px;
    width: 1075px;
    button.slick-prev,
    button.slick-next {
      z-index: 100;
      height: 50px;
      width: 50px;
      top: 20%;
      &::before {
        content: none;
      }
    }
    button.slick-prev {
      background: url(${arrowLeft}) no-repeat;
    }
    button.slick-next {
      background: url(${arrowRight}) no-repeat;
    }
    .slick-slide {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-direction: column;
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      .slide {
        text-align: center;
        font-family: Yrsa;
        line-height: 30px;
        font-weight: 400;
        font-size: 18px;
        color: #717171;
        outline: none;
        width: 760px !important;
        display: -webkit-flex !important;
        display: -ms-flex !important;
        display: flex !important;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-align-items: center;
        align-items: center;
        background: url(${quote}) center top no-repeat;
      }
    }

    .customer-info {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin-top: 50px;
      width: 220px;
      height: 70px;
      .customer-img {
        height: 70px;
        width: 70px;
      }
      .customer-description {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        -ms-align-items: center;
        align-items: center;
        margin-left: 20px;
      }
      .customer-name {
        font-family: Yrsa;
        line-height: 30px;
        font-weight: 500;
        font-size: 22px;
        color: #222128;
      }
      .customer-position {
        font-family: Yrsa;
        font-weight: 400;
      }
    }

    .slick-dots {
      bottom: 30px;
      li {
        margin: 0px 15px;
        button {
          &::before {
            content: "";
            background-color: #b9b9b9;
            border-radius: 50%;
            height: 10px;
            width: 10px;
            opacity: 1;
          }
        }
      }
      li.slick-active {
        button {
          &::before {
            background-color: #211e1e;
          }
        }
      }
    }
  }
`;

function OurCustomersSection() {
  const settings = {
    draggable: true,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StyledSection>
      <StyledSectionH2>Our customers</StyledSectionH2>
      <StyledSectionParagraph>Testimonials</StyledSectionParagraph>
      <Slider {...settings}>
        <div className="slide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="customer-info">
            <img
              className="customer-img"
              src={customerPic}
              alt="Joanna Stanley"
            />
            <div className="customer-description">
              <span className="customer-name">Joanna Stanley</span>
              <span className="customer-position">Big Data Company</span>
            </div>
          </div>
        </div>
        <div className="slide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="customer-info">
            <img
              className="customer-img"
              src={customerPic}
              alt="Joanna Stanley"
            />
            <div className="customer-description">
              <span className="customer-name">Joanna Stanley</span>
              <span className="customer-position">Big Data Company</span>
            </div>
          </div>
        </div>
        <div className="slide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="customer-info">
            <img
              className="customer-img"
              src={customerPic}
              alt="Joanna Stanley"
            />
            <div className="customer-description">
              <span className="customer-name">Joanna Stanley</span>
              <span className="customer-position">Big Data Company</span>
            </div>
          </div>
        </div>
      </Slider>
    </StyledSection>
  );
}

export default OurCustomersSection;
