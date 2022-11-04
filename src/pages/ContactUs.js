import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import sendEmail from "../components/Email";

export const ContactUs = () => {
  return (
    <article className="mt-4">
      <Form className="pt-4 pl-20" onSubmit={sendEmail}>
        <h4>Contact Us</h4>
        <Form.Group className="mb-3" controlId="FullName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="FullName"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@mail.com"
            name="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Message"
            placeholder="Your Message"
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </article>
  );
};
