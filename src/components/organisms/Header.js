import React from "react";
import styled from "styled-components";
import brand from "components/images/brand.png";

const StyledHeader = styled.header`
  z-index: 500;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;

  background-color: transparent;
  padding-top: 50px;
  height: 100px;
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
  .brand {
    margin-left: 95px;
    width: 142px;
    height: 37px;
  }
  nav {
    margin-right: 80px;
    width: 600px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-between;
      li {
        a {
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <a href="#0" className="brand">
        <img src={brand} alt="olusio" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#0" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#0">Our services</a>
          </li>
          <li>
            <a href="#0">About us</a>
          </li>
          <li>
            <a href="#0">Customers</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
