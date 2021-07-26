import React from 'react';
import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
// init("user_mrYNsy02PWXF2wAF7XwSF");

// import './ContactUs.css';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3iaby1k', 'template_cx6swrj', e.target, 'user_mrYNsy02PWXF2wAF7XwSF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Phone number</label>
      <input type="text" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}