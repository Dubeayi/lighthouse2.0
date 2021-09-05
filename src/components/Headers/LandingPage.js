import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import { Headset } from 'react-bootstrap-icons';
import Logo1 from 'assets/img/logo/logoLight7.svg';

function LandingPage() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ruben-hanssen-xrlerw3BaiQ-unsplash.png").default + ")",
            // "url('https://i.ibb.co/ZcmvRR9/ruben-hanssen-xrlerw3-Bai-Q-unsplash.jpg')"
            flexDirection: "column"
        }}
        loading="lazy"

      >
        <div className="filter" />
        <div className="content-center" style={{marginTop: "11em !important"}}>

          <Container>
          <div
        className="title-brand homePageLogo"
        style={{
          backgroundImage:
          `url(${Logo1})`,
        }}
        />
            <div
        className="title-brand"
        >

              {/* <img alt="Lighthouse Lekki Logo" className="homePageLogo" src={Logo1}/> */}
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
            The first step to change is awareness, the second step is acceptance
            </h2>
          </Container>

        </div>
        <div className="center phone">
            <a
          href="tel:09098846237"
          className="phoneNumber"
          >
            <Headset style={{fontSize:"1.8em"}} /> 09098846237
          </a>
          </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
          {/* <a
          href="tel:09098846237"
          className="category category-absolute"
          >
            <Headset style={{fontSize:"1.8em"}} /> 09098846237
          </a> */}
      </div>
    </>
  );
}

export default LandingPage;
