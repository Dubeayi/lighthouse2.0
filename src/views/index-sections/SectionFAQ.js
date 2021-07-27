import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import faq from '../../assets/img/icons/clearredfaq.png'
import { Link } from "react-router-dom";

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

function SectionFAQ() {
  const [location, setLocation] = React.useState(false);
  const [pricing, setPricing] = React.useState(false);
  const [length, setLength] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [itemsToBring, setItemsToBring] = React.useState(false);
  const [clientCharacteristics, setClientCharacteristics] = React.useState(false);
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
  const toggleClientCharacteristics = () => {
    setClientCharacteristics(!clientCharacteristics);
  };

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <>
      <div className="section javascript-components faq-b">
        <Container>
          <div className="faqTitle">
            <h2 style={{ textAlign: "center" }}>Frequestly Asked Questions<span> <img src={faq} alt="question icon" /></span></h2>
          </div>
          <Row id="modals" className="faq">
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
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
            <Col className="faqBoxes" data-aos="fade-up">
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
                      <TelephoneFill className="bootstrapIcon" />
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
                      <Envelope className="bootstrapIcon" />
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
            </Col>
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
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
                  <h5>
                    You cannot put a price on Freedom. Your health is our priority, and we will help you become the best version of you. <br /> <br />
                    For pricing details, please&nbsp;
                      <a
                        href="tel:09098846237"
                        style={{
                        color: "#F5593D",
                        fontSize: "1em",
                        fontWeight: 400
                        }}
                      >
                        call us
                      </a>
                      &nbsp;for more info
                  </h5>
                </div>
              </Modal>
            </Col>
            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleClientCharacteristics}
              >
                What clients does Lighthouse accept
              </Button>
              <Modal isOpen={clientCharacteristics} toggle={toggleClientCharacteristics}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleClientCharacteristics}
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
                    What clients we accept
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>Lighthouse offers rehabilitation for anyone with a dependency problem <br />
                      For more information, check out our
                      {/* <a
                      onClick={toggleClientCharacteristics}
                      href="/client_char"
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;Client Characteristics page
                      </a> */}
                      <Link to="/client_char"
                      onClick={toggleClientCharacteristics}
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;Client Characteristics page
                      </Link>
                  </h5>
                </div>
              </Modal>
            </Col>
            </Col>
            <br />
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
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
            <Col className="faqBoxes" data-aos="fade-up">
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
                  <h5>Apart from your personal belongings, you may bring reading and writing material. <br />
                      The centre supplies bedding and basic toiletries. For more information, check out our
                      <a
                      onClick={toggleItemsToBring}
                      href="/prohibited_items"
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;list of forbidden items
                      </a>
                  </h5>
                </div>
              </Modal>
            </Col>
            </Col>


          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionFAQ;
