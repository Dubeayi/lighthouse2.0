import React from "react";

export default function ThreeSteps () {

  return (
    <div
    className="threeSteps"
    >
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3>
            <span className="numero">1</span>

            GET IN CONTACT WITH US
            </h3>
              <span className="learnMore">
                Learn More
              </span>
        </div>
        </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3 >
            <span className="numero">2</span>

            GET PUT IN THE RIGHT PROGRAM

            </h3>
          <span className="learnMore">Learn More</span>
        </div>
        </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection" style={{ borderBottom: "none"}}>
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


