import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import "aos/dist/aos.css";

import { Headset } from 'react-bootstrap-icons';
import Logo1 from 'assets/img/logo/logoLight.svg';

function LandingPage(props) {
  return (
    <>
      <div
        className="headerTemplate section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ruben-hanssen-xrlerw3BaiQ-unsplash.jpg").default + ")",
        }}
        // data-aos="fade-right"
      >
        <div className="filter" />
        <div className="content-center">

          <Container>
          <div
        className="title-brand templateLogo"
        style={{
          backgroundImage:
          `url(${Logo1})`,
        }}
        />
            <div className="pageTitle">
          {props.title}
            </div>
          </Container >
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default LandingPage;