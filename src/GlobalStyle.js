import { createGlobalStyle } from "styled-components";
import proximaNovaBold from "./fonts/ProximaNova-Bold.otf";
import yrsaLight from "./fonts/Yrsa-Light.ttf";
import yrsaBold from "./fonts/Yrsa-Bold.ttf";
import yrsaMedium from "./fonts/Yrsa-Medium.ttf";
import yrsaRegular from "./fonts/Yrsa-Regular.ttf";
import yrsaSemiBold from "./fonts/Yrsa-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Proxima Nova Bold";
    src: url(${proximaNovaBold}) format("opentype");
  }

  @font-face {
    font-family: "Yrsa";
    src: url(${yrsaLight}) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Yrsa";
    src: url(${yrsaRegular}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Yrsa";
    src: url(${yrsaMedium}) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Yrsa";
    src: url(${yrsaBold}) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: "Yrsa";
    src: url(${yrsaSemiBold}) format("truetype");
    font-weight: 900;
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }
  body{
    background-color: #fff;
    width: 100%;
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
