import React from "react";
// reactstrap components
import { Container } from "reactstrap";

import { Headset } from 'react-bootstrap-icons';
import Logo1 from 'assets/img/logo/logoLight7.svg';
import fog from 'assets/img/fog-low.png';
import movingClouds from 'assets/img/clouds.png';

function LandingPage() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            'url(https://lighthouselekki.s3.us-east-2.amazonaws.com/ruben-hanssen-xrlerw3BaiQ-unsplash.jpg)',
          flexDirection: "column"
        }}
      >
        <div className="filter" />
        <div className="content-center" style={{ marginTop: "11em !important" }}>

          <Container>
            <div
              className="title-brand homePageLogo"
              style={{ backgroundImage: `url(${Logo1})` }}
            />
            <div
              className="title-brand"
            >
              <div className="fog-low">
                <img
                  alt="..."
                  src={fog}
                  loading="lazy"
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={fog}
                  loading="lazy"
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
            href="tel:09048434776"
            className="phoneNumber"
          >
            <Headset style={{ fontSize: "1.8em" }} /> +234 9048434776
          </a>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: `url(${movingClouds})`
          }}
          loading="lazy"
        />
      </div>
    </>
  );
}

export default LandingPage;
