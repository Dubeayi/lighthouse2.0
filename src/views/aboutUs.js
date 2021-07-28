import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";
import SectionAboutUs from "./aboutUs-sections/SectionAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />

      <LandingPageTemplate title="About Us" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
        <SectionAboutUs />
        <Footer />
      </div>
    </>
  );
}


export default AboutUs;
