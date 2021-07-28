import React from "react";

import { Container } from "reactstrap";
import image from 'assets/img/smile.png';


function Introduction() {
  return (
    <>
      <div
        className="mealBreakerText"
        style={{ backgroundColor: "floralwhite" }}
      >
        <Container>
            <div
            className="thankYou"
            style={{
              backgroundImage: `url(${image})`
            }}
            />
        </Container>
      </div>{" "}
    </>
  );
}

export default Introduction;
