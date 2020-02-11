import React from "react";
import styled from "styled-components";
import ServiceBox from "components/molecules/ServiceBox";
import { ourServicesDummyData } from "../../dummydata/ourServicesDummyData";
import { StyledSectionH2 } from "components/atoms/StyledSectionH2";
import { StyledSectionParagraph } from "components/atoms/StyledSectionParagraph";
import { StyledSectionFlexColumnCenter } from "components/atoms/StyledSectionFlexColumnCenter";

const StyledSection = styled(StyledSectionFlexColumnCenter)`
  background-color: #fff;
  height: 650px;
  width: 100%;

  .wrapper {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    width: 1110px;
    height: 280px;
  }
`;

function OurServicesSection() {
  return (
    <StyledSection>
      <StyledSectionH2>Our services</StyledSectionH2>
      <StyledSectionParagraph>What we can do</StyledSectionParagraph>
      <div className="wrapper">
        {ourServicesDummyData.map((box, index) => (
          <ServiceBox {...box} index={index} />
        ))}
      </div>
    </StyledSection>
  );
}

export default OurServicesSection;
