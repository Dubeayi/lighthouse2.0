import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

// import SectionRules from "views/index-sections/SectionScheduleMeal.js";
import SectionAboutItems from "views/prohibitedItems-sections/SectionAboutItems.js";
import SectionForbiddenItems from "views/prohibitedItems-sections/SectionForbiddenItems.js";
import PreFooter from "views/prohibitedItems-sections/PreFooter.js";

// index sections

function ForbiddenItems() {
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

      <LandingPageTemplate title="Prohibited Items" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>

        <SectionAboutItems />
        <SectionForbiddenItems />
        <PreFooter />
        <Footer />
      </div>
    </>
  );
}


export default ForbiddenItems;
