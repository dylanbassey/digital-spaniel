import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderStyles } from "./HeaderStyles";
import logo from "../../assets/images/Digital Spaniel logo01-01.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop.current) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderContainer>
      <div className={`sticky-nav ${scrollingDown ? "hidden" : ""}`}>
        <div className="sticky-nav-content">
          <HeaderStyles>
            <a href="/">
              <img src={logo} alt="Spaniel Design Agency logo" />
            </a>
            <Navbar />
          </HeaderStyles>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
