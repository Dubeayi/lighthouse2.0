import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <div id="images">
          <Container>
            <div className="title">
              <h3 style={{textAlign: "center", paddingBottom: "15px"}}>Client Reviews</h3>
            </div>
            <Row style={{marginBottom: "11em"}}>
              <Col className="mr-auto ml-auto ipad" style={{height: "fit-content"}} md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/man1Blurred.jpg").default}
                  style={{height: "15em"}}
                />
                <p className="textLeft"><em>Deciding to go to Lighthouse for my weed addiction is probably the healthiest decision I could have made for my career. The staff were so encouraging! As soon as I entered, I knew I was in the right place</em></p>
              </Col>
              <Col className="mr-auto ml-auto ipad" style={{height: "fit-content"}}  md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/man2Blurred.png").default}
                  style={{height: "15em"}}
                />
                <p className="textLeft"><em>I initially didn't want to go to Lighthouse, but was forced by my family. And boy was it the best decision for me! I didn't realize it then, but I was on a crash course to destruction. I knew I needed help, and always going to be grateful to Olawale for believing in me when I didn't believe in myself!</em></p>
              </Col>
              <Col className="mr-auto ml-auto ipad" style={{height: "fit-content"}}  md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/man3Blurred.jpg").default}
                  style={{height: "15em"}}
                />
                <p className="textLeft"><em>I am so sorry it has taken me a while to leave this review, but I have been so caught up in my 'new' life. That is, the life that I have chosen after leaving Lighthouse, where I am in control. For the first time since I was a child I actually know the happpiness that comes with being truly free. I love you Lighthouse!!!</em></p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionTypography;
