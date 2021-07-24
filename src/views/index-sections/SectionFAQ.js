import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import faq from '../../assets/img/icons/clearredfaq.png'
//import faq from '../../assets/img/icons/blueredfaq.png'
//import faq from '../../assets/img/icons/dottedfaq.png'
//import faq from '../../assets/img/icons/questionfaq.png'



// reactstrap components
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";

import { TelephoneFill, Envelope } from 'react-bootstrap-icons';


// core components

function SectionFAQ() {
  const [location, setLocation] = React.useState(false);
  const [pricing, setPricing] = React.useState(false);
  const [length, setLength] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [itemsToBring, setItemsToBring] = React.useState(false);
  // const [pricing, setPricing] = React.useState(false);
  const toggleLocation = () => {
    setLocation(!location);
  };
  const togglePricing = () => {
    setPricing(!pricing);
  };
  const toggleLength = () => {
    setLength(!length);
  };
  const toggleStart = () => {
    setStart(!start);
  };
  const toggleItemsToBring = () => {
    setItemsToBring(!itemsToBring);
  };

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <>
      <div className="section javascript-components">
        <Container className="cont">
          <div className="faqTitle">
            <h2 style={{ textAlign: "center" }}>Frequestly Asked Questions<span> <img src={faq} alt="question icon" /></span></h2>
          </div>
          <Row id="modals" className="faq">
            <Col md="6" data-aos="fade-up">
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleLocation}
              >
                Where are we located
              </Button>
              {/* Modal */}
              <Modal isOpen={location} toggle={toggleLocation}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleLocation}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                    style={{
                      color: "#F5593D",
                      fontWeight: "400"
                    }}
                  >
                    Location
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>We are located in Lekki phase 1, opposite GTB...</h5>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleLocation}
                    >
                      This helps!
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button
                      className="btn-link"
                      color="danger"
                      type="button"
                      id="unhelpful"
                    >
                      This did not help
                      <UncontrolledPopover
                        placement="bottom"
                        target="unhelpful"
                        trigger="focus"
                      >
                        <PopoverBody>
                          Thanks! This improves our user experience
                        </PopoverBody>
                      </UncontrolledPopover>
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
            <Col md="6" data-aos="fade-up">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={togglePricing}
              >
                How much will this cost
              </Button>
              <Modal isOpen={pricing} toggle={togglePricing}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={togglePricing}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="Pricing"
                    style={{
                      color: "#F5593D",
                      fontWeight: "400"
                    }}
                  >
                    Pricing
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>You cannot put a price on Freedom. Your health is our priority, and we will help you become the best version of you. <br /> <br />
                  For pricing details, please visit our <a onClick={togglePricing} href="#" >Pricing</a> page</h5>
                </div>
              </Modal>
            </Col>
            <br />
            <Col md="6" data-aos="fade-up">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleLength}
              >
                How long is the program
              </Button>
              <Modal isOpen={length} toggle={toggleLength}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleLength}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="length"
                    style={{
                      color: "#F5593D",
                      fontWeight: "400"
                    }}
                  >
                    Program Length
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>The length of residency at the rehabilitation facility is 12 weeks</h5>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleLength}
                    >
                      This helps!
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button
                      className="btn-link"
                      color="danger"
                      type="button"
                      id="unhelpful"
                    >
                      This did not help
                      <UncontrolledPopover
                        placement="bottom"
                        target="unhelpful"
                        trigger="focus"
                      >
                        <PopoverBody>
                          Thanks! This improves our user experience
                        </PopoverBody>
                      </UncontrolledPopover>
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
            <Col md="6" data-aos="fade-up">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleItemsToBring}
              >
                What items can I bring with me
              </Button>
              <Modal isOpen={itemsToBring} toggle={toggleItemsToBring}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleItemsToBring}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="length"
                    style={{
                      color: "#F5593D",
                      fontWeight: "400"
                    }}
                  >
                    What items can I bring with me
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>Apart from your personal belongings, you may bring reading and writing material. <br/>
                      The centre supplies bedding and basic toiletries. For more information, check out our
                      <a
                      onClick={toggleItemsToBring}
                      href="#"
                      style={{
                        fontWeight:"300",
                        color:"F5593D"
                      }}
                      >
                        &nbsp;list of forbidden items
                      </a>
                  </h5>
                </div>
              </Modal>
            </Col>
            <Col md="6" data-aos="fade-up">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleStart}
              >
                How can I start the program
              </Button>
              <Modal isOpen={start} toggle={toggleStart}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleStart}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="start"
                    style={{
                      color: "#F5593D",
                      fontWeight: "400"
                    }}
                  >
                    Join the Program
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>
                    We are here to help you take your first steps to freedom! <br />
                    {/* Call us today at <a
                      style={{ color: "#F5593D", textDecoration: "underline" }} href="tel:09098846237">
                      09098846237</a>
                    or mail any questions to <a
                      style={{ color: "#F5593D", textDecoration: "underline" }} href="mailto:lighthouselekki@hotmail.com">
                      lighthouselekki@hotmail.com
                    </a> */}
                    Call us today or mail us with any questions you have.
                    <br /> <br />
                    <div>
                      <TelephoneFill className="bootstrapIcon"/>
                      <a
                        href="tel:09098846237"
                        style={{
                          color: "#F5593D",
                          fontSize: "1em",
                          fontWeight: 400
                        }}
                      >
                        09098846237
                      </a>
                    </div>
                    <div>
                      <Envelope className="bootstrapIcon"/>
                      <a
                        href="mailto:lighthouselekki@hotmail.com"
                        style={{
                          color: "#F5593D",
                          fontSize: "1em",
                          fontWeight: 400
                        }}
                      >
                        lighthouselekki@hotmail.com
                      </a>
                    </div>
                  </h5>
                </div>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionFAQ;
