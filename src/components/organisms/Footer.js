import React from "react";
import styled from "styled-components";
import shapeLeft from "components/images/footer-shape-left.png";
import shapeRight from "components/images/footer-shape-right.png";
import { StyledSectionH2 } from "components/atoms/StyledSectionH2";
import { StyledSectionParagraph } from "components/atoms/StyledSectionParagraph";

const StyledFooter = styled.footer`
  background: url(${shapeLeft}) no-repeat left center / 500px 490px,
    url(${shapeRight}) no-repeat right center / 400px 470px;
  background-color: #231c60;
  height: 700px;

  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;

  .wrapper {
    text-align: center;
    margin-top: 50px;
    height: 400px;
    width: 540px;
    color: #ffffff;
    h2,
    p {
      margin: 0;
    }
    h2 {
      font-family: "Proxima Nova Bold";
      font-weight: 700;
      font-size: 36px;
    }
    p {
      font-family: Yrsa;
      font-weight: 500;
      font-size: 22px;
    }
    .form {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-top: 50px;

      input,
      textarea {
        background-color: #ffffff;
        font-family: Yrsa;
        line-height: 30px;
        font-weight: 400;
        font-size: 18px;
        outline: none;
        border: none;
      }

      .inputsWrapper {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        color: #717171;
        input {
          border-radius: 30px;
          padding-left: 20px;
          width: 255px;
          height: 50px;
        }
      }
      textarea {
        margin: 25px 0px 25px 0px;
        border-radius: 30px;
        resize: vertical;
        padding: 20px;
        height: 150px;
        width: 540px;
      }
      .submitBtn {
        background-color: #ffdf77;
        margin: 0px 0px 0px auto;
        border-radius: 25px;
        font-family: Yrsa;
        line-height: 45px;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;
        color: #25242a;
        outline: none;
        border: none;
        width: 140px;
        height: 40px;
      }
    }
  }

  .backToTopSection {
    border-top: 1px solid #362f6f;
    height: 100px;
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    .btn {
      background: transparent;
      font-family: Yrsa;
      font-weight: 500;
      cursor: pointer;
      font-size: 25px;
      color: #9592b3;
      outline: none;
      border: none;
    }
  }
`;

function handleClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(`Name: ${event.target[0].value}`);
  console.log(`E-mail or phone: ${event.target[1].value}`);
  console.log(`Message: ${event.target[2].value}`);
}

function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        <StyledSectionH2 hasColorWhite>Contact with us</StyledSectionH2>
        <StyledSectionParagraph hasColorWhite>
          Let's talk
        </StyledSectionParagraph>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputsWrapper">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail or phone" />
          </div>
          <textarea name="name" placeholder="Message"></textarea>
          <input type="submit" value="Send" className="submitBtn" />
        </form>
      </div>

      <div className="backToTopSection">
        <button className="btn" onClick={handleClick}>
          <div>&uarr;</div>
          <div>Back to top</div>
        </button>
      </div>
    </StyledFooter>
  );
}

export default Footer;
