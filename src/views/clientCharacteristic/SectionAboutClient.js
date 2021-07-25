import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import image from 'assets/img/anonymous.png';

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
              <div className="bodyText">
                Lighthouse Lekki is open to all clients, regardless of tribe, religion, sex, or physical disability.
                <br />
                To see if you, or a loved one are a right fit for our programme, below is a list of individuals that we accept.
                <br />
                <br />
                Please note that Lighthouse Lekki <u style={{fontWeight: 600}}>SHALL NOT</u> provide services to patients with primary psychotic behaviour or patients who have been diagnosed with a severe form of schizophrenia. Please contact us if you would like to learn more
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

export default AboutClient;
