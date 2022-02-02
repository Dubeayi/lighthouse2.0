import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import image from 'assets/img/smile2.png';

// core components

function SectionIntroduction() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingBottom: "13px" }}
      >
        <Container>
          <Row>
          <Col lg="6" md="12" className="title2">
              <figure className="swing">
              <img
                  alt="..."
                  src={(image)}
                  // width="400"
                />
                </figure>
            </Col>
            <Col lg="6" md="12" className="title1" style={{textAlign:"center"}}>

              <h2 className="contactUsHeader">Thanks for Reaching Out!</h2>
              <br />
              <p className="bodyText">
                We are happy to hear from you. For administrative issues, please note the below hours of operation:
                <br />
                <br />
                <span style={{fontWeight:600}}>
                Monday: 9 a.m. – 6 p.m.<br />
                Tuesday: 9 a.m. – 6 p.m.<br />
                Wednesday: 9 a.m. – 6 p.m.<br />
                Thursday: 9 a.m. – 6 p.m.<br />
                Friday: 9 a.m. – 6 p.m.<br />
                Saturday: 9 a.m. - 12 p.m.<br />
                Sunday: closed<br />
                </span>
                <br />
              </p>
            </Col>

          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionIntroduction;
