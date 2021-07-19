import React from "react";
import SectionSocialMedia from "./SectionSocialMedia.js";
import IndexNavbar from "./IndexNavbar.js";

const ContactUs = (props) => {
  return (
    <>
      <IndexNavbar />
      <article>
        <address>
          Lighthouse Lekki
          <br />
          5B Tokunbo Omisore Street
          <br />
          Lekki Phase 1<br />
          Lekki Lagos, Nigeria
          <br />
          Tel: 090 98846237
        </address>
      </article>
      <article>
        <SectionSocialMedia />
      </article>
      <article>
        <a
          href="mailto:lighthouselekki@hotmail.com"
          style={{
            color: "#F5593D",
            fontSize: "1em",
            fontWeight: 400,
          }}
        >
          lighthouselekki@hotmail.com
        </a>
      </article>
    </>
  );
};

export default ContactUs;
