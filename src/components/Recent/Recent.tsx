import React, { useState } from "react";
import {
  RecentCategoriesStyles,
  RecentCategoryItemStyles,
  RecentContentStyles,
  RecentImageStyles,
  RecentStyles,
} from "./RecentStyles";
import ImageGallery from "../ImageGallary/ImageGallary";
import ArrowButton from "../ArrowButton/ArrowButton";
import Newspaper from "../../assets/images/newspaper02.png";
import Fish from "../../assets/images/makerek.png";
import Whellies from "../../assets/images/whellies01.png";
import Rider from "../../assets/images/rider01.png";
import Smiley from "../../assets/images/newspaper.png";

const Recent = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { src: Newspaper, area: "img1" },
    { src: Fish, area: "img2" },
    { src: Whellies, area: "img3" },
    { src: Smiley, area: "img4" },
    { src: Rider, area: "img5" },
  ];

  const handleClick = (direction: string) => {
    alert(`Arrow button pointing ${direction} clicked`);
  };

  const catagories = ["All", "Branding", "Web Design", "Digital Marketing"];
  return (
    <RecentStyles>
      <RecentContentStyles>
        <div className="heading-section">
          Some of our <br /> <span>recent projects</span>
        </div>
        <RecentCategoriesStyles>
          {catagories.map((catagory) => (
            <RecentCategoryItemStyles
              key={catagory}
              isActive={activeCategory === catagory}
              onClick={() => setActiveCategory(catagory)}
            >
              {catagory}
            </RecentCategoryItemStyles>
          ))}
        </RecentCategoriesStyles>
        <RecentImageStyles>
          <ImageGallery images={images} overlay={true} />
          <div className="buttons">
            <ArrowButton
              direction="<"
              color="#50647380"
              onClick={() => handleClick("left")}
            />
            <ArrowButton
              direction=">"
              color="#19293A"
              onClick={() => handleClick("right")}
            />
          </div>
          <a href="/talk">See all work</a>
        </RecentImageStyles>
      </RecentContentStyles>
    </RecentStyles>
  );
};

export default Recent;
