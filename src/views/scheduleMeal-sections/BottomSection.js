import React from "react";
import { Container, Row, Col } from "reactstrap";

//meal plan is very important because clients have to eat structured meals

//within the first day of arrival, we ask you what your diet is. Whether you have dietary restrictions; lactose intolerance etc.

//there is a standard menu where quality food is offered, but once we get a feel of your

//high protein, high carbs depending on the situation

//parents / family/ wards are allowed to recommend what the client will consume

//the parents are able to send effects for the gifts. Protein shakes/ snacks.

const BottomSection = () => {
  return (
    <>
      <div
        className="section"
        style={{ backgroundColor: "floralwhite", marginTop: "-55px" }}
      >
    <Container>
      <Row>
            <Col>
            <br />
            <h2 className="title center">Meals</h2>
              <br />
              <div className="bodyText">
              <ul className="activities">
                  <li>Clients will be provided at least 3 cooked meals per day</li>
                  <br />
                  <li>Within the client's first day of arrival, we will ask for any dietary restrictions (lactose intolerance, allergies etc.)</li>
                  <br />
                  <li> Parents / family/ wards are permitted to offer preferences to what the client should consume</li>
                  <br />
                  <li>We have a standard menu that offers top quality food to our clients. Once we get a taste of your dietary preference, we may adjust our menu accordingly to offer specialized meals at no increased cost </li>
                  <br />
                  <li>Depending on how the client represents him/herself, parents/ family/ wards are permitted to send effects or gifts to the clients </li>
                  <br />
                  <li>The rehab does <span style={{fontWeight: 600}}>not</span> permit any energy drinks to be purchased and consumed on the premises. This includes but is not limited to; Red Bull etc.</li>
                </ul>
              </div>
              <br />
            </Col>
          </Row>
      </Container>
      </div>
    </>
  );
};

export default BottomSection;
