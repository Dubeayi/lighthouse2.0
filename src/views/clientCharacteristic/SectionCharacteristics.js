import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Characteristics() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingTop: 0 }}
      >
        <Container>
          <Row>
            <Col>
            <br />
            <h2 className="title center">Who we Accept</h2>
              <br />
              <div className="bodyText">
              <ul className="activities">
                  <li>Individuals with a severe form of alcohol or other drug misuse, or those in a high-risk group who need medication-assisted detoxification</li>
                  <br />
                  <li>Individuals finding it difficult to achieve abstinence in the community</li>
                  <br />
                  <li>Individuals who require respite, and an intensive programme of support and care, which cannot realistically be delivered in a community or out-client setting</li>
                  <br />
                  <li>Individulas who need to receive treatment away from their social circle or family environment</li>
                  <br />
                  <li>Individuals with a dependency problem who want a treatment that is residential, and are willing to accept restrictions on their liberty for the duration of the program</li>
                  <br />
                  <li>Individuals with a dependency problem who want a treatment that is residential, and are willing to accept restrictions on their liberty for the duration of the program</li>
                  <br />
                </ul>
              </div>
              <br />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Characteristics;
