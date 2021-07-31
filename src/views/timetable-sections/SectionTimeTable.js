import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import { Modal, Container } from "reactstrap";
import pdf from "./dailytimetable.pdf";
import image from 'assets/img/pdf.png';

export default function SectionTimetable() {
  const [modalClicked, setModalClicked] = useState(false);

  const toggleModalClicked = () => {
    setModalClicked(!modalClicked);
    // document.documentElement.classList.toggle("nav-open");
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
                  alt="..."
                  src={(image)}
                  onClick={toggleModalClicked}
                  className="pdfTings"
                />
              </figure>
              <p style={{fontWeight: 400}}>Click to zoom</p>
              {/* Modal */}
              <Modal isOpen={modalClicked} toggle={toggleModalClicked} style={{overflowx:"auto"}}>
                <div className="testModal">
                  <Document
                    file={pdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onClick={toggleModalClicked}
                    alt="Pdf of daily activities"

                  >
                    <Page pageNumber={1}/>
                  </Document>
                </div>
              </Modal>
        </div>
      </Container>
    </div>
  );
}
