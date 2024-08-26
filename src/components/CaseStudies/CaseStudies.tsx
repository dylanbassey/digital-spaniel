import React from "react";
import {
  CaseStudiesContentStyles,
  CaseStudiesStyles,
} from "./CaseStudiesStyles";

const CaseStudies = () => {
  return (
    <CaseStudiesStyles>
      <CaseStudiesContentStyles>
        {/* <div className="next-section">Case studies</div>
        <p>
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </p> */}
        <div className="next-section">
          What are <br /> <span>we all about</span>
        </div>
      </CaseStudiesContentStyles>
    </CaseStudiesStyles>
  );
};

export default CaseStudies;
