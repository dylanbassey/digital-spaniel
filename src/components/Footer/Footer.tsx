import {
  Colophon,
  FooterContainer,
  FooterSection,
  LinksStyles,
  SocialStyles,
} from "./FooterStyles";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { links } from "../../lib/data";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <div className="footer text-container">
          <div className="heading-section">
            We're a brand's <br />
            <span className="gray">best friend</span>
          </div>
          <p className="footer-link">
            <a href="/">Let's talk</a>
          </p>
        </div>
        <div className="footer links-container">
          <LinksStyles>
            <div>
              <h4 className="sub-header">Explore</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <a href="#">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="sub-header">Services</h4>
              <ul>
                {links.map((service) => (
                  <li key={service.name}>
                    <a href="#">{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="questions-container">
              <h4 className="sub-header">Questions?</h4>
              <div>
                <h4>Call Us</h4>
                <span>0121 345 678</span>
              </div>

              <div>
                <h4>Email Us</h4>
                <span>info@digitalspaniel.co.uk</span>
              </div>
            </div>
          </LinksStyles>
        </div>
      </FooterSection>
      <div>
        <Colophon>
          <div>
            Copyright © Digital Spaniel {new Date().getFullYear()}. All rights
            reserved.
          </div>
          <SocialStyles>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </SocialStyles>
        </Colophon>
      </div>
    </FooterContainer>
  );
};
