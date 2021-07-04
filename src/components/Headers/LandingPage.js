import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import { Headset } from 'react-bootstrap-icons';

function LandingPage() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1584060969066-4d6b9c3efe0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80)"
            // "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Lighthouse Lekki</h1>
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
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
          <a
          href="tel:09098846237"
          className="category category-absolute"
          >
            <Headset style={{fontSize:"1.8em"}} /> 09098846237
          </a>
      </div>
    </>
  );
}

export default LandingPage;
