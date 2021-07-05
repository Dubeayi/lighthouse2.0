import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPage from "components/Headers/LandingPage.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionIntroduction from "views/index-sections/SectionIntroduction.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionFAQ from "views/index-sections/SectionFAQ.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionActivities from "views/index-sections/SectionActivities.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionBrochure from "views/index-sections/SectionBrochure.js";


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
      <LandingPage />
      <div className="main">
        <SectionIntroduction />
        <SectionTypography />
        <SectionActivities />
        <SectionFAQ />
        <SectionCarousel />
        <SectionDark />
        <SectionBrochure />
        <DemoFooter />
      </div>
    </>
  );
}


export default Index;
