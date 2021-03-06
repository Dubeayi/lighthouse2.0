import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";
import SectionRules from "views/rules-sections/SectionRules.js";

function Rules() {
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

      <LandingPageTemplate title="Lighthouse Rules & Regulations" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
        <SectionRules />
        <Footer />
      </div>
    </>
  );
}


export default Rules;
