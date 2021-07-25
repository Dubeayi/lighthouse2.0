import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container className="text-center">
        <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Hours Of Operation</h2>
              <p className="description">
              <ul className="hoursOfOper">
          <li>Monday: 9 a.m. – 6 p.m.</li>
          <li>Tuesday: 9 a.m. – 6 p.m.</li>
          <li>Wednesday: 9 a.m. – 6 p.m.</li>
          <li>Thursday: 9 a.m. – 6 p.m.</li>
          <li>Friday: 9 a.m. – 6 p.m.</li>
          <li>Saturday: closed</li>
          <li>Sunday: closed</li>
        </ul>
        <br />
        <p>
          *** These hours do not reflect group times that exceed 6 p.m.
          These hours only reflect the times we are available to sort out
          administrative issues.
        </p>
        <br />
        <p>
          *** Assessments and individual sessions are conducted during
          normal operating hours; 10.00 am – 1.00 pm and 2.30 pm -5.00 pm.
        </p>
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
            <Button
                className="btn-round"
                color="danger"
                href="tel:09098846237"
              >
                Call us today
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
