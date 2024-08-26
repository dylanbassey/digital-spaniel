import React from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  ScrollContainer,
} from "react-scroll-motion";
import { HeaderContainer, HeaderStyles } from "./HeaderStyles";
import logo from "../../assets/images/Digital Spaniel logo01-01.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <ScrollContainer>
      <Animator animation={batch(Fade(), FadeIn())}>
        <HeaderContainer>
          <HeaderStyles>
            <a href="/">
              <img src={logo} alt="Spaniel Design Agency logo" />
            </a>
            <Navbar />
          </HeaderStyles>
        </HeaderContainer>
      </Animator>
    </ScrollContainer>
  );
};

export default Header;
