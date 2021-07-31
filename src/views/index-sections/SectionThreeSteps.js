import React from "react";
import { Link } from "react-router-dom";


export default function ThreeSteps() {

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
          <a
            href="tel:09098846237"
            alt="Call Lighthouse Lekki"
          >
            <span className="learnMore">
              Call us today
            </span>
          </a>
        </div>
      </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection">
          <h3 >
            <span className="numero">2</span>
            GET PUT IN THE RIGHT PROGRAM
          </h3>
          <Link to="/service">
            <span className="learnMore">Learn More</span>
          </Link>
        </div>
      </div>
      <div className="numberedSectionContainer">
        <div className="numberedSection" style={{ borderBottom: "none" }}>
          <h3>
            <span className="numero">3</span>
            BEGIN THE JOURNEY TO GET UNSTUCK
          </h3>
          <Link to="/contact_us">
          <span className="learnMore">Start Now!</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


