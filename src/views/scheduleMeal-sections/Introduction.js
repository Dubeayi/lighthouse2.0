import React from "react";

import { Container, Row } from "reactstrap";

function Introduction() {
  return (
    <>
      <div
        className="mealBreakerText"
        style={{ backgroundColor: "floralwhite" }}
      >
        <Container>
          <Row>
            {/* <div className="bodyText"> */}
            <h4>
              At lighthouse, we are firm believers that a healthy body is key to a healthy mind,
            </h4>
            {/* </div> */}
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Introduction;
