import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

function MidSection() {
  return (
    <>
      <div
        className="mealBreakerText"
        style={{ backgroundColor: "floralwhite", paddingTop: 0, marginTop: "-29px"}}
      >
        <Container>
          <Row>
            <h4>
              Thus we take our client meals <span style={{fontWeight: 600}}> very seriously </span>
            </h4>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default MidSection;
