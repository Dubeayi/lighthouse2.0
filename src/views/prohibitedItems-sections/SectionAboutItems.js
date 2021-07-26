import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import image from 'assets/img/checkMark.png';

// core components

function AboutClient() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingBottom: "27px", boxShadow: "0 5px 10px -4px rgb(0 0 0 / 15%)" }}
      >
        <Container>
          <Row>
            <Col lg="6" md="12" className="title1">
            <h2 className="title">What You Can Bring With You</h2>

              <div className="bodyText">
                Apart from your personal belongings, Lighthouse Lekki permits you to bring reading and writing material.
                <br />
                <br />
                The centre supplies bedding and basic toiletries.
                <br />
                <br />
                Before admission, a staff member is required to check your belongings and will be able to advise you if anything is not suitable. Any item found unsuitable will be labelled and securely stored until your exit. Upon admission, you will also be subjected to a body search to ensure no prohibited items are being stored on your person.
              </div>
              <br />
            </Col>
            <Col lg="6" md="12" className="title2">
                 <div className="checkMark"
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

export default AboutClient;
