import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageTemplate from "components/Headers/LandingPageTemplate.js";
import Footer from "components/Footers/Footer.js";
import SectionContactUs from "./contactUs-sections/SectionContactUs.js";
// import SocialMedia from "views/index-sections/SectionSocialMedia.js";
import ContactForm from "./contactUs-sections/ContactForm.js";

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
      <LandingPageTemplate title="Contact Us" />
      <div className="main" style={{ backgroundColor: "floralwhite" }}>
        <ContactForm />
        <SectionContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Index;
