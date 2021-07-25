import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionHoursOfOperation() {
  return (
    <>
      <div className="section" style={{backgroundColor: "#efe9d9"}}>
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Hours of Operation</h2>
              <p className="description">
                If you do, call us today to get help for you or a loved one.
                <br />All it takes is one phonecall. We will handle the rest.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
            <ul>
          <li>Monday: 9 a.m. – 6 p.m.</li>
          <li>Tuesday: 9 a.m. – 6 p.m.</li>
          <li>Wednesday: 9 a.m. – 6 p.m.</li>
          <li>Thursday: 9 a.m. – 6 p.m.</li>
          <li>Friday: 9 a.m. – 6 p.m.</li>
          <li>Saturday: closed</li>
          <li>Sunday: closed</li>
        </ul>
        <p>
          Please note: These hours do not reflect group times that exceed 6 p.m.
          These hours only reflect the times we are available to sort out
          administrative issues.
        </p>
        <p>
          Please Note: Assessments and individual sessions are conducted during
          normal operating hours; 10.00 am – 1.00 pm and 2.30 pm -5.00 pm.
        </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionHoursOfOperation;
