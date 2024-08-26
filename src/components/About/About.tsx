import React from "react";
import { AboutStyles, ImageGallaryStyles } from "./AboutStyles";
import ImageGallery from "../ImageGallary/ImageGallary";
import office01 from "../../assets/images/office01.png";
import office02 from "../../assets/images/office02.png";
import office03 from "../../assets/images/office03.png";
import office04 from "../../assets/images/office04.png";

const About = () => {
  const images = [
    { src: office01, area: "img4" },
    { src: office02, area: "img3" },
    { src: office03, area: "img5" },
    { src: office04, area: "img2" },
  ];
  return (
    <AboutStyles>
      <ImageGallaryStyles>
        <ImageGallery images={images} overlay={false} />
        <a href="/talk">About</a>
        <a href="/talk">Careers</a>
      </ImageGallaryStyles>
    </AboutStyles>
  );
};

export default About;
