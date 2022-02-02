import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import "aos/dist/aos.css";

import Logo1 from 'assets/img/logo/logoLight7.svg';
import { Link } from "react-router-dom";
import movingClouds from 'assets/img/clouds.png';

function LandingPage(props) {
  return (
    <>
      <div
        className="headerTemplate section-dark"
        style={{
          backgroundImage: 'url(https://lighthouselekki.s3.us-east-2.amazonaws.com/ruben-hanssen-xrlerw3BaiQ-unsplash.jpg)'
        }}
      // data-aos="fade-down"
      >
        <div className="filter" />
        <div className="content-center">

          <Container>
            <Link to="/home">
              <div
                className="title-brand templateLogo"
                style={{
                  backgroundImage:
                    `url(${Logo1})`,
                }}
              />
            </Link>
            <div className="pageTitle">
              {props.title}
            </div>
          </Container >
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: `url(${movingClouds})`
          }}
        />
      </div>
    </>
  );
}

export default LandingPage;
