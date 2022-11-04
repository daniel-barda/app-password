import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FAQ_content } from "../config";

export const FAQ = () => {
  return (
    <article className="mt-4 text-center">
      <h4 className="pt-4">FAQ</h4>

      {FAQ_content.map((item, id) => {
        const { FAQ_Header, content } = item;
        return (
          <Accordion key={id}>
            <Accordion.Item eventKey={id}>
              <Accordion.Header>{FAQ_Header}</Accordion.Header>
              <Accordion.Body>{content}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </article>
  );
};
