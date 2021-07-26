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
              <h2 className="title left">Items you Should <span style={{ fontWeight: 600 }}>Not</span> Bring</h2>

              <div className="bodyText">
                <ul className="activities">
                  <li>Portable TV’s, Cameras, or DVD players</li>
                  <br />
                  <li>Incense, candles, or oil burners</li>
                  <br />
                  <li>Any sharp objects</li>
                  <br />
                  <li>Spray deodorants (roll-on only), fragrances, perfumes, oils, aerosols, etc.</li>
                  <br />
                  <li>Weapons and all drug paraphernalia</li>
                  <br />
                  <li>Mouthwash</li>
                  <br />
                  <li>Pornographic material</li>
                  <br />
                  <li>Expensive items such as jewellery</li>
                  <br />
                  <li>Clothing with brands of alcohol, drug or offensive logos</li>
                  <br />
                  <li>Books with gang, drug use, grotesque, horror, or occult themes</li>
                  <br />
                  <li>Non-prescribed medication or non-declared medication, including herbal highs</li>
                </ul>
              </div>
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
