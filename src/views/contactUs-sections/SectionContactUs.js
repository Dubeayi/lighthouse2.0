import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function SectionContactUs() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{
          backgroundColor: "floralwhite",
          paddingBottom: "27px",
          boxShadow: "0 5px 10px -4px rgb(0 0 0 / 15%)",
        }}
      >
        <Container>
          <Row>
            <Col lg="6" md="12" className="title1">
              <div className="bodyText">

                <address>
                  Lighthouse Lekki
                  <br />
                  5B Tokunbo Omisore Street
                  <br />
                  Lekki Phase 1,{''}Lekki Lagos. <br />
                 Phone: +234 9048434776
                </address>
                <br />
              </div>
              <br />

            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionContactUs;
