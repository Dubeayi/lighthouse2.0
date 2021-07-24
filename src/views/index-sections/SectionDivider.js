import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function SectionDivider() {
  return (
    <>
      <div
        className="divider"
        style={{
          backgroundColor: "#5c8695",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   maxWidth: "1200px",
          //   paddingLeft: "10px",
          //   paddingRight: "10px",
        }}
      >
        {/* <Container> */}
        <div className="column-container"></div>
        <div className="column-container"></div>
        <div className="column-container"></div>
      </div>
      {/* <div className="section section-buttons color2" style={{backgroundColor: "rgb(119 122 89 / 51%)"}}>#2</div>
      <div className="section section-buttons color3"style={{backgroundColor: "rgb(201 145 85 / 51%)"}}>#3</div> */}
    </>
  );
}

export default SectionDivider;
