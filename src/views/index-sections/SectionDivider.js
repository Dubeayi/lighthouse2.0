import React from "react";
import hand from "../../assets/img/divider/helping-hand.svg";
import growth from "../../assets/img/divider/growth.svg";
import yinyang from "../../assets/img/divider/handshake.svg";


// reactstrap components
import { Container } from "reactstrap";

function SectionDivider() {
  return (
    <>
      <div
        className="parent-divider"
 
      >
        {/* <Container> */}
        <div className="child-divider">
          <div className="icon-wrapper">
            <img className="divider-img" src={hand} alt="handshake" />
          </div>
          <h3 className="divider-h3">REACH OUT</h3>
        </div>
        <div className="child-divider">
          <div className="icon-wrapper">
            <img className="divider-img" src={growth} alt="a plant in hand" />
          </div>
          <h3 className="divider-h3">FIND MEANING</h3>
        </div>
        <div className="child-divider">
          <div className="icon-wrapper">
            <img
              className="divider-img"
              src={yinyang}
              alt="yin-yang symbol in head"
            />
          </div>
          <h3 className="divider-h3">FIND HEALING</h3>
        </div>
      </div>
      {/* <div className="section section-buttons color2" style={{backgroundColor: "rgb(119 122 89 / 51%)"}}>#2</div>
      <div className="section section-buttons color3"style={{backgroundColor: "rgb(201 145 85 / 51%)"}}>#3</div> */}
    </>
  );
}

export default SectionDivider;
