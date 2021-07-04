import React from "react";
import {Container} from "reactstrap";

export default function ThreeSteps () {
  return (
    <>
      <Container
      className="container threeSteps"
      >
        <div className="numberedSection">
          <h3>
            <span className="numero">1</span>

            FIND THE PROGRAM THAT IS RIGHT FOR YOU
            </h3>
          <span className="learnMore">Learn More</span>
        </div>
        <div className="numberedSection">
          <h3>
            <span className="numero">2</span>

            CONNECT WITH OUR TEAM
            </h3>
          <span className="learnMore">Call Us</span>
        </div>
        <div className="numberedSection">
          <h3>
            <span className="numero">3</span>

            BEGIN THE JOURNEY TO GET UNSTUCK
            </h3>
          <span className="learnMore">Begin the process</span>
        </div>
      </Container>
    </>
  )
}


