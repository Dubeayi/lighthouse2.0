import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function SectionHoursOfOperation() {
  return (
    <>
      <div className="section section-dark hoursOfOperation" style={{backgroundColor: "oldlace"}}>
        <Container className="text-center fontWhite" style={{backgroundColor: "#0a2a0a77", boxShadow: "5px 5px 10px rgb(0 0 0 / 50%)"}} >
          <Row className="text-center upgrade-pro fontWhite">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title ">Hours Of Operation</h2>
              <p className="description">
                Monday: 9 a.m. – 6 p.m.<br />
                Tuesday: 9 a.m. – 6 p.m.<br />
                Wednesday: 9 a.m. – 6 p.m.<br />
                Thursday: 9 a.m. – 6 p.m.<br />
                Friday: 9 a.m. – 6 p.m.<br />
                Saturday: closed<br />
                Sunday: closed<br />
                <br />
              </p>
              <p className="description">
                *** These hours do not reflect group times that exceed 6 p.m.
                These hours only reflect the times we are available to sort out
                administrative issues.
              </p>
              <br />
              <p className="description">
                *** Assessments and individual sessions are conducted during
                normal operating hours; 10.00 am – 1.00 pm and 2.30 pm -5.00 pm.
              </p>
              <br />
              <br />
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

export default SectionHoursOfOperation;
