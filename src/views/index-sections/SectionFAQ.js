import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import faq from '../../assets/img/icons/clearredfaq.png'

import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";


function SectionFAQ() {
  const [location, setLocation] = React.useState(false);
  const [pricing, setPricing] = React.useState(false);
  const [length, setLength] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [itemsToBring, setItemsToBring] = React.useState(false);
  const [clientCharacteristics, setClientCharacteristics] = React.useState(false);
  const [expectations, setExpectations] = React.useState(false);
  const [outpatient, setOutpatient] = React.useState(false);
  const [food, setFood] = React.useState(false);
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
  const toggleExpectations = () => {
    setExpectations(!expectations);
  };
  const toggleOutpatient = () => {
    setOutpatient(!outpatient);
  };
  const toggleFood = () => {
    setFood(!food);
  };

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    <>
      <div className="faqSection">
        <Container>
          <div className="faqTitle">
            <h2 style={{ textAlign: "center" }}>Frequestly Asked Questions<span> <img src={faq} alt="question icon" /></span></h2>
          </div>
          <Row id="modals" className="faq">
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
              {/* Button trigger modal */}
              <Button
                className="btn-round btn-long"
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
                  <h5>We are located in Lekki phase 1, opposite GTB.

                    Click this &nbsp;
                    <a
                    href="https://goo.gl/maps/tGLrPzC6rPo7DgUPA"
                    target="https://goo.gl/maps/tGLrPzC6rPo7DgUPA"
                    style={{fontWeight: 600}}
                    >
                    link
                    </a>
                    &nbsp; for our exact location
                  </h5>
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
                className="btn-round btn-long"
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
                    <br />
                    <a
                    href= "/contact_us"
                    alt="Contact us to get started"
                    style={{fontWeight: 600}}
                    >
                    Contact us &nbsp;
                    </a>
                    today to get started.
                    <br /> <br />
                  </h5>
                </div>
              </Modal>
            </Col>

            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
                color="danger"
                outline
                type="button"
                onClick={toggleOutpatient}
              >
                Can I be an out-patient
              </Button>
              <Modal isOpen={outpatient} toggle={toggleOutpatient}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleOutpatient}
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
                    Can I be an out-patient
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>Short answer, no. In order for rehabilitation to work, and to prevent relapse, we have deemed it necessary to offer only in-house rehabilitation for the duration of the program
                  </h5>
                </div>
              </Modal>
            </Col>
            </Col>
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
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
                    For pricing details, please
                    <a
                      onClick={togglePricing}
                      href="/contact_us"
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;contact us
                      </a>
                      &nbsp;for more info
                  </h5>
                </div>
              </Modal>
            </Col>
            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
                color="danger"
                outline
                type="button"
                onClick={toggleFood}
              >
                Do I pay for my own Meals
              </Button>
              <Modal isOpen={food} toggle={toggleFood}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleFood}
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
                    Meals
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>At Lighthouse Lekki, we believe that a healthy body is essential to a healthy mind, and feed our clients 3 square meals per day. For more information, please visit our
                      <a
                      onClick={toggleFood}
                      href="/prohibited_items"
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;Meals
                      </a>
                      &nbsp;page
                  </h5>
                </div>
              </Modal>
            </Col>
            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
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
                      <a
                      onClick={toggleClientCharacteristics}
                      href="/client_char"
                      style={{
                        fontWeight: "400",
                        color: "F5593D"
                      }}
                    >
                      &nbsp;Client Characteristics page
                      </a>
                  </h5>
                </div>
              </Modal>
            </Col>
            </Col>
            <br />
            <Col>
            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
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
                className="btn-round btn-long"
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

            <Col className="faqBoxes" data-aos="fade-up">
              <Button
                className="btn-round btn-long"
                color="danger"
                outline
                type="button"
                onClick={toggleExpectations}
              >
                What can I expect from joining the program
              </Button>
              <Modal isOpen={expectations} toggle={toggleExpectations}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleExpectations}
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
                    What I can expect from the program
                  </h5>
                </div>
                <div className="modal-body">
                  <h5>Lighthouse Lekki offers rehabilitation and proposes a new way of thinking. <br />
                      These days, we are often distracted by technology, society, and pressures, to the extent that we forget how much meaning our lives have. We at Lighthouse aim to remind you of your purpose.
                      <br />
                      <br />
                      Note that we cannot enforce anything upon you, and can only help you as far as you are willing to be helped.
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
