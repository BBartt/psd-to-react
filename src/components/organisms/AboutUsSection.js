import React from "react";
import styled from "styled-components";
import AboutUsBox from "components/molecules/AboutUsBox";
import { aboutUsDummyData } from "../../dummydata/aboutUsDummyData";
import { StyledSectionH2 } from "components/atoms/StyledSectionH2";
import { StyledSectionParagraph } from "components/atoms/StyledSectionParagraph";
import { StyledSectionFlexColumnCenter } from "components/atoms/StyledSectionFlexColumnCenter";

const StyledSection = styled(StyledSectionFlexColumnCenter)`
  background-color: #eef0fa;
  height: 620px;

  .wrapper {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 1100px;
    height: 260px;
  }
`;

function AboutUsSection() {
  return (
    <StyledSection>
      <StyledSectionH2>About us</StyledSectionH2>
      <StyledSectionParagraph>Meet the team</StyledSectionParagraph>
      <div className="wrapper">
        {aboutUsDummyData.map((box, index) => (
          <AboutUsBox {...box} index={index} />
        ))}
      </div>
    </StyledSection>
  );
}

export default AboutUsSection;
