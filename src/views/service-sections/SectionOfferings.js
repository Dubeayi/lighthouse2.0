import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import "aos/dist/aos.css";
import sign from 'assets/img/sign.jpg';

// core components

function SectionActivities() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "slategrey" }}
        // data-aos="fade-up"
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Our Rehabilitation Program</h2>
              <br />
              <p className="bodyText darkBackground">
                We offer a structured programme of treatment and/or rehabilitation activities, to assist clients to develop and practise the skills to manage substance use and related problems.
                <br/>
                <br/>
                In order for our program to be effective, the client resides in the residential rehabilitative home for the period of the therapeutic intervention
                <br/>
                <br/>
                 24-hour staff cover on site
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <div className="backgroundImage"
                  style={{
                    backgroundImage: `url(${sign})`
                  }}
              >

              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionActivities;
