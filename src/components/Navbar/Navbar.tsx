import React, { useEffect, useState } from "react";
import { links } from "../../lib/data";
import {
  BigNavStyles,
  MobileNavIconStyle,
  SmallNavStyles,
} from "./NavbarStyles";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Initial check to ensure correct mode on first render
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileNavIcon = (
    <MobileNavIconStyle
      size="30"
      color="black"
      onClick={() => setIsOpen((prev) => !prev)}
    />
  );

  const SmallNav = (
    <>
      {mobileNavIcon}
      {isOpen && (
        <SmallNavStyles>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
        </SmallNavStyles>
      )}
    </>
  );

  const BigNav = (
    <BigNavStyles>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </BigNavStyles>
  );

  return isMobile ? SmallNav : BigNav;
};

export default Navbar;
