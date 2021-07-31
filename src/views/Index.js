import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPage from "components/Headers/LandingPage.js";
import Footer from "components/Footers/Footer.js";
import "aos/dist/aos.css";


// index sections
import SectionIntroduction from "views/index-sections/SectionIntroduction.js";
import SectionReviews from "views/index-sections/SectionReviews.js";
import SectionFAQ from "views/index-sections/SectionFAQ.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionThreeSteps from "views/index-sections/SectionThreeSteps.js";
import SectionActivities from "views/index-sections/SectionActivities.js";
import SectionHoursOfOperation from "views/index-sections/SectionHoursOfOperation.js";
import SectionBrochure from "views/index-sections/SectionBrochure.js";
import SectionDivider from "views/index-sections/SectionDivider.js";


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
      <div className="main" style={{backgroundColor: "floralwhite"}}>
        <div data-aos="fade-up">
        <SectionDivider />
        </div>
        <SectionIntroduction />
        <SectionThreeSteps />
        <SectionCarousel />
        <SectionReviews />
        <SectionActivities />
        <SectionHoursOfOperation />
        <SectionFAQ />
        <SectionBrochure />
        <Footer />
      </div>
    </>
  );
}


export default Index;
