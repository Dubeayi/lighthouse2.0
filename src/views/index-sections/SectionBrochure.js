import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionBrochure() {
  return (
    <>
      <div className="section brochure-mobile-view" style={{backgroundColor: "white"}}>
        <Container className="text-center">
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want to learn more?</h2>
              <p className="description" style={{color:"#59757e"}} >
              If you would like to learn more about Lighthouse and our services, click the button below to download our user handbook.
              </p>< br/>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
            <Button className="btn-round" color="info" href='LighthouseHandbook.pdf' download>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Download Lighthouse Handbook
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionBrochure;
