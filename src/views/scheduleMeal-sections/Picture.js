import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import image from 'assets/img/meal.jpg';

// core components

function Picture() {
  return (
    <>
      <div
        className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", zIndex: 0}}
      >
        <Container>
          <Row>
                 <div className="mealPlan"
                  style={{
                    backgroundImage: `url(${image})`
                  }}
              />
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Picture;
