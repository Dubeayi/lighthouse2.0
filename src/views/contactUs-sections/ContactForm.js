import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  const [userName, setUserName] = React.useState(0);
  const [email, setEmail] = React.useState(0);
  const [message, setMessage] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState(0);
  const [dropDown, setdropDown] = React.useState(0);
  const [formSubmitted, setFormSubmitted] = React.useState(false);


  const successfulUpdate = () => {
    // should alert user that form has been submitted
    alert("Thanks for contacting us! If you provided an email, please check your inbox for more information");
    // should clear form
    document.getElementById('contactUsForm').reset();
    setUserName("")
    setEmail("")
    setPhoneNumber("")
    setMessage("")
    setFormSubmitted(true)
  };

  function sendEmail(e) {
    e.preventDefault();

    //if form submitted is true, alert the user to refresh the page before trying to resubmit data
    if (formSubmitted) {
      return alert("Looks like you've submitted the form already. Please refresh the page to send another message")
    }

    //if email and phoneNumber are both null, alert fill out one way to reach out to you
    if (!email && !phoneNumber) {
      return alert("Please provide either an email address or number we can reach you on")
    }
    //if no name is provided, alert asking to provide one
    if (!userName) {
      return alert("Please fill in the Name field")
    }
    //if no message or dropdown information was provided, alert asking to provide more information
    if ((!message && !dropDown) || (!message && dropDown === "-") || (!message && dropDown === "other")) {
      return alert("Please provide information on why you are reaching out")
    }

    emailjs.sendForm('service_aoq2gsk', 'template_cx6swrj', e.target, 'user_mrYNsy02PWXF2wAF7XwSF')
      .then((result) => {
        successfulUpdate();
        console.log(result.text);
      }, (error) => {
        //alert err
        console.log(error.text);
      });
  }

  return (
    <>
      <div className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingTop: 0}}
      >
        <Container>
          <div className="iframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.762251501998!2d3.45468477969459!3d6.448208630490572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f9c62eb061%3A0x5c5a454d272112bc!2s5b%20Tokunbo%20Omisore%20St%2C%20Lekki%20Phase%20I%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1627547278797!5m2!1sen!2sus" className="iframe2" style={{border: "solid"}} loading="lazy" title="lighthouseLocation"></iframe>
          </div>
          <br />
          <br />

          <p style={{ fontWeight: 600, textAlign: "center" }}>
            Our facility is located at:
            <br />
          </p>
          <p style={{ textAlign: "center" }}>
            5B Tokunbo Omisore Street, <br />
            Lekki Phase 1, <br />
            Lekki, Lagos
          </p>
          <br />
          <h3>How to Contact Us</h3><br />
          <p>
            Should you wish to contact us during our administrative hours, you can call us on &nbsp;

            <a
              href="tel:09098846237"
              style={{
                color: "#f5593d",
                fontSize: "1em",
                fontWeight: 400,
              }}
            >
              0909-884-6237.
            </a>
            <br />
            <br />
            </p>
          <p>
            If you need to contact us outside of our administrative hours, or are unable to get a response from dialling the number above, feel free to send a message to our entire team and we will contact you as soon as possible:
          </p>
          <br />
          <br />

          <Form onSubmit={sendEmail} id="contactUsForm">

            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="name" name="user_name" placeholder="Please enter your first and last Name" id="userName" onChange={(e) => {setUserName(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="reply_to" placeholder="E.g. 123@email.com" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input type="number" name="phone_number" placeholder="Please enter your phone number" id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">To help us assist you quicker, please select from the dropdown the option that best describes your current needs</Label>
              <Input type="select" name="subject" id="formSelectDropdown" onChange={(e) => {setdropDown(e.target.value)}}>
                <option>-</option>
                <option>I need more information on your services </option>
                <option>I would like to know if I qualify as a client of Lighthouse Lekki</option>
                <option>I have an emergency situation that needs immediate attention</option>
                <option>I have questions on pricing</option>
                <option>I have a substance dependency and would like to speak to someone</option>
                <option>Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="textarea">Please provide any extra information </Label>
              <Input type="textarea" name="message" id="message" onChange={(e) => {setMessage(e.target.value)}}/>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
