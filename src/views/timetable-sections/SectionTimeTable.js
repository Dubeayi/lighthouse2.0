import React, { useState } from "react";
import { Modal, Container, Button } from "reactstrap";
import image from 'assets/img/pdf.png';

export default function SectionTimetable() {
  const [modalClicked, setModalClicked] = useState(false);

  const toggleModalClicked = () => {
    setModalClicked(!modalClicked);
  };
  return (
    <div className="section section-nucleo-icons"
      style={{ backgroundColor: "floralwhite" }}
    >
      <Container className="aboutUsBorder">
        <div>
          <h2 className="title center">Daily Timetable</h2>
          <p className="bodyText center">Below is a standard schedule for clients enrolled in the Lighthouse program <br/><br/>
          Please note that this is not a fixed schedule; we are constantly updating our schedule to best serve our clients.
          <br/>
          <br/>
          </p>
          </div>
        <div className="centeredRow">
              <figure>
                <img
                  alt="dailyTimeTable"
                  src={(image)}
                  onClick={toggleModalClicked}
                  className="pdfTings"
                />
              </figure>
              <div style={{paddingBottom: "25px"}}>
              <Button className="btn-round" color="info" href='dailytimetable.pdf' download>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Download Daily Timetable
              </Button>
              </div>
              {/* Modal */}
              <Modal isOpen={modalClicked} toggle={toggleModalClicked} style={{overflowx:"auto"}}>
                <div className="testModal">
                  <figure>
                  <img
                    alt="Pdf of daily activities"
                    src={(image)}
                    onClick={toggleModalClicked}
                  />
                  </figure>
                </div>
              </Modal>
        </div>
      </Container>
    </div>
  );
}
