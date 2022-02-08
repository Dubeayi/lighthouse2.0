import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import image from 'assets/img/exercise.png';

// core components

function SectionActivities() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite" }}
      >
        <Container data-aos="fade-zoom-in">
          <Row>
            <Col lg="6" md="12" className="title1">
              <h2 className="title">Leadership & Professional Training</h2>
              <br />
              <div className="bodyText">
                Some of Lighthouse Lekki's compulsory activities include, but are not limited to:
              <ul className="activities">
                <br />
                  <li>Coupleship program</li>
                  <li>Occupational Therapy</li>
                  <li>Leadership / business coaching</li>
                  <li>Healing Trauma Program</li>
                  <li>Health sexuality and intimacy program</li>
                  <li>Life coaching</li>
                </ul>
              </div>
              <br />
            </Col>
            <Col lg="6" md="12" className="title2">
                 <div className="serviceIcon lasting"
                  style={{
                    backgroundImage: `url(${image})`
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
