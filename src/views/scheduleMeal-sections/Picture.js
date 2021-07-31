import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import image from 'assets/img/meal.jpg';

// core components

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
                    backgroundImage: `url(${image})`
                  }}
              />
        </Container>
      </div>{" "}
    </>
  );
}

export default Picture;
