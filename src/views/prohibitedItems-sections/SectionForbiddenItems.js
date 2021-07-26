import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import image from 'assets/img/prohibitedItems.svg';

function ForbiddenItems() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingTop: 0 }}
      >
        <Container>
          <Row>
            <Col lg="6" md="12" className="title1">
            <h2 className="title left">What you Should <span style={{fontWeight: 600}}>Not</span> Bring</h2>

            <div className="bodyText">
              <ul className="activities">
                  <li>Mouthwash</li>
                  <br />
                  <li>Expensive items such as jewellery</li>
                  <br />
                  <li>Portable TV’s, or DVD players</li>
                  <br />
                  <li>Incense, candles, or oil burners</li>
                  <br />
                  <li>Any sharp objects</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                  <li>Spray deodorants (roll-on only), aerosols, etc.</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                  <li>Cameras</li>
                  <br />
                </ul>
              </div>
              <br />
            </Col>
            <Col lg="6" md="12" className="title2">
                 <div className="forbiddenItems"
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

export default ForbiddenItems;
