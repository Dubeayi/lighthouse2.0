import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionRules from "views/index-sections/SectionScheduleMeal.js";

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
      <LandingPageTemplate />
      <div className="main">
        <SectionRules />
        <div>Helloo worleddd</div>
        <DemoFooter />
      </div>
    </>
  );
}


export default Index;
