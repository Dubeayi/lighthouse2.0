import React from "react";

// reactstrap components
import {Container} from 'reactstrap';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

// import SectionRules from "views/index-sections/SectionScheduleMeal.js";
import Timetable from "views/timetable-sections/SectionTimeTable.js";


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
    {/* <Container> */}
      <IndexNavbar />

      <LandingPageTemplate title="Timetable" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
      <Timetable />
        <Footer />
      </div>
      {/* </Container> */}
    </>
  );
}


export default Index;
