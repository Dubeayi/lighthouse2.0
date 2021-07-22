import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import image from 'assets/img/groupCounseling.png';

// core components

function SectionIntroduction() {
  return (
    <>
      <div
      className="section section-nucleo-icons"
      style={{backgroundColor: "floralwhite"}}
      >
        <Container>
          <Row>
            <Col lg="6" md="12" className="title1">

              <h2 className="title">What we Provide</h2>
              <br />
              <p className="bodyText">
                Lighthouse Lekki provides confidential rehabilitative and residential services, through a range of structured interventions to address drug and alcohol misuse.
              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                // href="/nucleo-icons"
                target="_blank"
              >
                What we expect from you
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                // href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                Times of Operation
              </Button>
            </Col>
            <Col lg="6" md="12" className="title2">
                 <div className="serviceIcon firsting"
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

export default SectionIntroduction;
