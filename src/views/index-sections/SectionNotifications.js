import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function SectionNotifications() {
  const [alertSuccess, setAlertSuccess] = React.useState(true);
  const [alertWarning, setAlertWarning] = React.useState(true);
  const [alertDanger, setAlertDanger] = React.useState(true);
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h3>Notifications for scheduling dates. Might be overkill. </h3>
        </div>
      </Container>
      <div id="notifications">
        <Alert color="info">
          <Container>
            <span>Those dates are available!</span>
          </Container>
        </Alert>
        <Alert color="success" isOpen={alertSuccess}>
          <Container>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlertSuccess(false)}
            >
              <i className="nc-icon nc-simple-remove" />
            </button>
            <span>Your dates have been confirmed with lighthouse! Color is too bright though.</span>
          </Container>
        </Alert>
        <Alert
          className="alert-with-icon"
          color="warning"
          isOpen={alertWarning}
        >
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertWarning(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                <i className="nc-icon nc-bell-55" /> There is a clash with the dates. Experiment with close button and icon.
              </div>
            </div>
          </Container>
        </Alert>
        <Alert className="alert-with-icon" color="danger" isOpen={alertDanger}>
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertDanger(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                <i className="nc-icon nc-bell-55" /> Sorry, there was an error with the dates you selected. Please contact us directly.
              </div>
            </div>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default SectionNotifications;
