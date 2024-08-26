import React from "react";
import Intro from "../components/Intro/Intro";
import Header from "../components/Header/Header";
import { LayoutHeaderStyles, LayoutStyles } from "./LayoutStyles";
import Capable from "../components/Capable/Capable";
import Recent from "../components/Recent/Recent";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import { Footer } from "../components/Footer/Footer";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";

const Layout = () => {
  return (
    <main>
      <LayoutHeaderStyles>
        <Header />
        <Intro />
      </LayoutHeaderStyles>
      <LayoutStyles>
        <Capable />
        <Recent />
        <CaseStudies />
        <About />
        <Testimonials />
        <Footer />
      </LayoutStyles>
    </main>
  );
};

export default Layout;
