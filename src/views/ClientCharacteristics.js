import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

import Characteristics from "./clientCharacteristic/SectionCharacteristics.js";
import AboutClient from "./clientCharacteristic/SectionAboutClient.js";


// index sections

function ClientCharacteristics() {
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
      <AboutClient />
      <Characteristics />
        <Footer />
      </div>
    </>
  );
}


export default ClientCharacteristics;
