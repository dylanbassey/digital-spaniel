import React from "react";
import {
  CapableContentStyles,
  CapableStyles,
  CapableTraitDoubleStyles,
  CapableTraitsStyles,
} from "./CapableStyles";

const Capable = () => {
  return (
    <CapableStyles>
      <CapableContentStyles>
        <div className="heading-section">
          What are <br /> <span>we capable of</span>
        </div>
        <p>
          By focusing on design as an enabler and putting a huge emphasis on our
          clients as co-producers, we create innovative, sustainable marketing
          that enhances brand experience and user engagement.
        </p>
        <a href="/talk">Our Process</a>
      </CapableContentStyles>
      <CapableTraitsStyles>
        <CapableTraitDoubleStyles>
          <div>
            <h4>Brand</h4>
            <p>
              Brand Strategy <p className="hover-state">{">"}</p>
            </p>
            <p>Logo & Name</p>
            <p>Identity & Collateral</p>
            <div>
              <h4>Development</h4>
              <p>eCommerce</p>
              <p>Web Development</p>
              <p>Mobile Apps</p>
            </div>
          </div>
          <div className="marketing-col">
            <h4>Marketing</h4>
            <p>Digital</p>
            <p>Market Research</p>
          </div>
        </CapableTraitDoubleStyles>
      </CapableTraitsStyles>
    </CapableStyles>
  );
};

export default Capable;
