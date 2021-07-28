import React from "react";
import hand from "../../assets/img/divider/helping-hand.svg";
import growth from "../../assets/img/divider/growth.svg";
import yinyang from "../../assets/img/divider/handshake.svg";

function SectionDivider() {
  return (
    <>
      <div className="parent-divider">
        <div className="child-divider">
          <div className="icon-wrapper">
            <img className="divider-img" src={hand} alt="handshake" />
          </div>
          <h3>REACH OUT</h3>
        </div>
        <div className="child-divider">
          <div className="icon-wrapper">
            <img className="divider-img" src={growth} alt="a plant in hand" />
          </div>
          <h3>FIND MEANING</h3>
        </div>
        <div className="child-divider">
          <div className="icon-wrapper">
            <img
              className="divider-img"
              src={yinyang}
              alt="yin-yang symbol in head"
            />
          </div>
          <h3>GET HEALING</h3>
        </div>
      </div>
    </>
  );
}

export default SectionDivider;
