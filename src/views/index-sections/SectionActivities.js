import React from "react";
import { Link } from "react-router-dom";


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


function SectionActivities() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons" style={{backgroundColor: "#655e4e"}}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title fontWhite">Lighthouse Activities</h2>
              <br />
              <p className="description fontWhite">
                Here at Lighthouse, we believe that the key to stability is keeping the body healthy and the mind active. As a result, our days are filled with activities to keep each client engaged, and healthy meals to nourish both body and mind.
              </p>
              <br />
             <Link to="/timetable">
              <Button
                className="btn-round"
                color="danger"
                // href="/nucleo-icons"
              >
                View Daily schedule
              </Button>
              </Link>
             <Link to="/meal_plan">
              <Button
                className="btn-round ml-1"
                color="danger"
                outline
                target="_blank"
              >
                View Meal Plan
              </Button>
              </Link>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionActivities;
