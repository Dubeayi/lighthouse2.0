import React from "react";
import {Container} from "reactstrap";

export default function ThreeSteps () {
  return (
    <div
    className="threeSteps"
    >
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3>
            <span className="numero">1</span>

            FIND THE PROGRAM THAT IS RIGHT FOR YOU
            </h3>
          <span className="learnMore">Learn More</span>
        </div>
        </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3>
            <span className="numero">2</span>

            CONNECT WITH OUR TEAM
            </h3>
          <span className="learnMore">Learn More</span>
        </div>
        </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3>
            <span className="numero">3</span>

            BEGIN THE JOURNEY TO GET UNSTUCK
            </h3>
          <span className="learnMore">Learn More</span>
        </div>
        </div>
    </div>
  )
}


