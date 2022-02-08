import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "aos/dist/aos.css";
import image from 'assets/img/counsel1.png';
// import image from 'assets/img/counsel1.png';

// core components

function SectionOfferings() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite" }}
        data-aos="fade-zoom-in"
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="serviceIcon"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
              </div>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Our Rehabilitation Program</h2>
              <br />
              <p className="bodyText">

                Holistic therapy and programs designed to assist individuals who are affected by substance use, unaddressed trauma, including anxiety and PTSD
                <br />
                <br />
                Our structured treatment and rehabilitation activities assist clients to develop and practise the skills to manage substance use and related problems.
                <br />
                <br />
                In order for our program to be effective, the client resides in the residential rehabilitative home for the period of the therapeutic intervention. The duration of our program is 90 days, with 24 hour staff to assist our clients.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionOfferings;
