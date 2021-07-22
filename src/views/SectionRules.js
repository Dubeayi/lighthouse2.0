import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

import Rules from "./rules-sections/SectionRules.js";


// index sections

function Index() {
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
      <LandingPageTemplate title="Rules" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
        <Rules />
        <Footer />
      </div>
    </>
  );
}


export default Index;
