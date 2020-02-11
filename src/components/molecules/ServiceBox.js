import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  border-radius: 10px;
  text-align: center;
  height: 280px;
  width: 260px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  &:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
    transition: box-shadow 200ms;
  }
  img {
    margin-bottom: 40px;
    height: 100px;
    width: 100px;
  }
  h3,
  p {
    margin: 5px;
  }
  p {
    font-family: Yrsa;
    font-weight: 400;
    font-size: 18px;
    color: #717171;
  }
`;

function ServiceBox({ icon, alt, title, description, index }) {
  return (
    <StyledWrapper key={index}>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledWrapper>
  );
}

export default ServiceBox;
