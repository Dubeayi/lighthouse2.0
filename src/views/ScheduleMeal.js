import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";

import Introduction from "./scheduleMeal-sections/Introduction.js";
import Picture from "./scheduleMeal-sections/Picture.js";
import MidSection from "./scheduleMeal-sections/MidSection.js";
import BottomSection from "./scheduleMeal-sections/BottomSection.js";

// style={{ background: `url(${meal})` }}

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

      <LandingPageTemplate title="Meal Plan" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
      <Introduction />
      <Picture />
      <MidSection />
      <Picture />
      <BottomSection />
        <Footer />
      </div>
    </>
  );
}


export default Index;
