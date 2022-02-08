import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Picture() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        loading="lazy"
        style={{ backgroundColor: "floralwhite", zIndex: 0}}
      >
        <Container>
                 <div className="mealPlan"
                  style={{
                    backgroundImage: `url(https://lighthouselekki.s3.us-east-2.amazonaws.com/meal.jpg)`
                  }}
              />
        </Container>
      </div>{" "}
    </>
  );
}

export default Picture;
