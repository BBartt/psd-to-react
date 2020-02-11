import styled from "styled-components";

export const StyledSectionParagraph = styled.p`
  color: ${props => (props.hasColorWhite ? "#fff" : "#5449c2")};
  font-family: Yrsa;
  font-weight: 500;
  font-size: 22px;
  margin: 0;
`;
