import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

function PreFooter() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingTop: 0 }}
      >
        <Container>
          <Row>
              <div className="preFooter">
                ** If you do have any of these items please DECLARE them straight away so that they won’t jeopardise your time on the programme. These rules are here to keep everyone in the community safe from harm!
              </div>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default PreFooter;
