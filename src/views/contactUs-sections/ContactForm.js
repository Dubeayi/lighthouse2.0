import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3iaby1k', 'template_cx6swrj', e.target, 'user_mrYNsy02PWXF2wAF7XwSF')
      .then((result) => {
        console.log(result.text);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  // function clearForm() {

  // }

  return (
    <>
      <div className="section section-nucleo-icons"
        style={{ backgroundColor: "floralwhite", paddingTop: 0}}
      >
        <Container>
          <h3>How to Contact Us</h3><br />
          <p>
            Should you wish to contact us during our administrative hours, you can call us on &nbsp;

            <a
              href="tel:09098846237"
              style={{
                color: "#f5593d",
                fontSize: "1em",
                fontWeight: 400,
                textDecoration: "underline"
              }}
            >
              0909-884-6237.
            </a>
            <br />
            <br />
            Our facility is located at:
            <br />
          </p>
          <p style={{ fontWeight: 600 }}>
            5B Tokunbo Omisore Street, <br />
            Lekki Phase 1, <br />
            Lekki, Lagos
          </p>
          <br />
          <p>
            If you need to contact us outside of our administrative hours, or are unable to get a response from dialling the number above, feel free to send a message to our entire team and we will contact you as soon as possible:
          </p>
          <br />
          <br />

          <Form onSubmit={sendEmail}>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="name" name="user_name" placeholder="Please enter your first and last Name" id="inputForm" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="reply_to" placeholder="E.g. 123@email.com" id="inputForm" />
            </FormGroup>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input type="number" name="user_phone" placeholder="Please enter your phone number" id="inputForm" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">To help us assist you quicker, please select from the dropdown the option that best describes your current needs</Label>
              <Input type="select" name="select" id="formSelectDropdown">
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
              <Input type="textarea" name="text" id="formTextArea" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
