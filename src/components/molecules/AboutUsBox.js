import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 260px;
  width: 260px;

  img {
    height: 215px;
    width: 100%;
  }
  .name {
    font-family: Yrsa;
    font-weight: 400;
    font-size: 24px;
    color: #222128;
    &::before {
      content: "";
      background-color: #00dae4;
      display: inline-block;
      border-radius: 50%;
      height: 25px;
      width: 25px;
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .tooltiptext {
    background-color: #000;
    visibility: hidden;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    margin-left: -80px;
    padding: 5px 0;
    width: 160px;
    color: #fff;
    bottom: 25%;
    z-index: 1;
    opacity: 0;
    left: 50%;
    transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      border-style: solid;
      margin-left: -5px;
      border-width: 5px;
      border-color: #000 transparent transparent transparent;
    }
  }
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 0.85;
  }
`;

function ServiceBox({ img, alt, name, index, position }) {
  return (
    <StyledWrapper key={index}>
      <img src={img} alt={alt} />
      <p className="name">{name}</p>
      <span className="tooltiptext">{position}</span>
    </StyledWrapper>
  );
}

export default ServiceBox;
