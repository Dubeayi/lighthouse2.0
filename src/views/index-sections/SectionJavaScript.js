import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Informative section</h2>
          </div>
          <Row id="modals">
            <Col md="6">
              <div className="title">
                <h3>Possible Modal popups? Maybe FAQ's.. Can be used to track user feedback</h3>
              </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModal}
              >
                Where are we located
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Somewhere in Lekki Phase 1, past the roundabout.. something yada yada yada ad;lfkadfna;ldkfahdfliaudhfalkkjdshfa
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      This helps!
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      This did not help
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Popovers</h3>
              </div>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip344834141"
                outline
                onClick={(e) => e.target.focus()}
              >
                On top
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip344834141"
                trigger="focus"
              >
                <PopoverHeader>Popover on top</PopoverHeader>
                <PopoverBody>
                  Info displaying on top
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip493417725"
                outline
                onClick={(e) => e.target.focus()}
              >
                On bottom
              </Button>
              <UncontrolledPopover
                placement="bottom"
                target="tooltip493417725"
                trigger="focus"
              >
                <PopoverHeader>Popover on bottom</PopoverHeader>
                <PopoverBody>
                Info displaying on bottom
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip746845223"
                outline
                onClick={(e) => e.target.focus()}
              >
                On left
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="tooltip746845223"
                trigger="focus"
              >
                <PopoverHeader>Popover on left</PopoverHeader>
                <PopoverBody>
                Info displaying on left
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round"
                color="danger"
                id="tooltip909471006"
                outline
                onClick={(e) => e.target.focus()}
              >
                On right
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "right"}
                target="tooltip909471006"
                trigger="focus"
              >
                <PopoverHeader>Popover on right</PopoverHeader>
                <PopoverBody>
                  Now right
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br />
            <Col md="6">
              <div className="title">
                <h3>Datepicker - advanced. Maybe in later stage</h3>
              </div>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Datetime Picker Here",
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Tooltips</h3>
              </div>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip392938669"
                outline
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip392938669"
              >
                On left
              </UncontrolledTooltip>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip354225297"
                outline
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip354225297"
              >
                On right
              </UncontrolledTooltip>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip739061283"
                outline
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip739061283"
              >
                On top
              </UncontrolledTooltip>
              <Button
                className="btn-round"
                color="danger"
                id="tooltip984013562"
                outline
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip984013562"
              >
                On bottom
              </UncontrolledTooltip>
            </Col>
          </Row>
          <div className="title">
            <h3>Possible Picture gallery of Lighthouse!!!</h3>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
