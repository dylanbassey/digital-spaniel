import React from "react";
import {
  IntroContentStyles,
  IntroImageStyles,
  IntroStyles,
} from "./IntroStyles";
import Dog from "../../assets/images/blue-dog.png";

const Intro = () => {
  return (
    <IntroStyles>
      <IntroContentStyles>
        <h3>BRAND, DEV, ECOM, MARKETING</h3>
        <div className="heading-section">
          We unleash <br /> <span>buisness potential</span>
        </div>
        <p>
          We create brand experiences which are memorable and distinct. Our
          experienced team create and develop brands with personality and
          resonance.
        </p>
        <a href="/talk">Let's talk</a>
      </IntroContentStyles>
      <IntroImageStyles src={Dog} alt="dog" />
    </IntroStyles>
  );
};

export default Intro;
