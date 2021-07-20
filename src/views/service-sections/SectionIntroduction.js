import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionActivities() {
  return (
    <>
      <div
      className="section section-nucleo-icons"
      style={{backgroundColor: "floralwhite"}}
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
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
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-satisfied" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionActivities;
