import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

// import SectionRules from "views/index-sections/SectionScheduleMeal.js";
import ClientCharacteristics from "./clientCharacteristic/SectionClientCharacteristics.js";


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

      <LandingPageTemplate title="Client Characteristics" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
      <ClientCharacteristics />
        <Footer />
      </div>
    </>
  );
}


export default Index;
