import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionIntroduction from "views/service-sections/SectionIntroduction.js";
import SectionOfferings from "views/service-sections/SectionOfferings.js";


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
      <LandingPageTemplate title="Services"/>
      <div className="main">
      <SectionIntroduction />
      <SectionOfferings />

        <div>Helloo worleddd</div>
        <DemoFooter />
      </div>
    </>
  );
}


export default Index;
