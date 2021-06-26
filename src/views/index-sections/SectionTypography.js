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
              <h3>Possible Client Reviews?</h3>
            </div>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Rounded Image</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src="https://pbs.twimg.com/media/EkC1LR2XkAAYsmQ.jpg"
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src="https://static.yafri.ca/wp-content/uploads/2016/11/10054619/President-Buhari.jpg"
                    />
                  </div>
                  <p>
                    Each meal was prepared with much care. Too bad I am a joker
                    <br />-Mohamadu Buhari
                  </p>
                </div>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <h4 className="images-title">Circle Image</h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg").default}
                />
                <p className="text-center">Client B</p>
              </Col>
              <Col className="mr-auto" md="2" sm="3">
                <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src="https://www.oozlemedia.com/wp-content/uploads/2016/10/donald-trump-joker-makeup-batman.jpg"
                />
                <p className="text-center">D.T</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionTypography;
