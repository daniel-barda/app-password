import React from "react";
import { Button } from "react-bootstrap";
import { FiCopy } from "react-icons/fi";
import { useGlobalContext } from "../components/context";
import Form from "react-bootstrap/Form";
import { minPassword, maxPassword } from "../config";
const FromComponent = () => {
  const {
    handleSubmit,
    handleInput,
    Clipboard,
    length,
    clipboard,
    hashPassword,
    error,
  } = useGlobalContext();

  return (
    <form
      className="pt-5"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3>Password Generator</h3>
      <Form.Check
        type="checkbox"
        name="LowerCase"
        id="LowerCase"
        label="LowerCase"
        onChange={(e) => handleInput(e)}
      />
      <Form.Check
        type="checkbox"
        name="UpperCase"
        id="UpperCase"
        label="UpperCase"
        onChange={(e) => handleInput(e)}
      />
      <Form.Check
        type="checkbox"
        name="Number"
        id="Number"
        label="Number"
        onChange={(e) => handleInput(e)}
      />
      <Form.Check
        type="checkbox"
        name="Symbols"
        id="Symbols"
        label="Symbols"
        onChange={(e) => handleInput(e)}
      />
      <Form.Label className="mt-4">{length} length password</Form.Label>
      <br />
      <Form.Range
        min={minPassword}
        max={maxPassword}
        name="length"
        onChange={(e) => handleInput(e)}
      />
      <br />
      <Form.Label htmlFor="password-Result">
        {error.show ? (
          <span className="text-danger">{error.msg}</span>
        ) : (
          "Result password"
        )}
      </Form.Label>
      <br />
      <Form.Control
        type="text"
        id="password-Result"
        aria-describedby="password-Result"
        placeholder="result password"
        value={hashPassword}
        readOnly
        style={{ display: "inline" }}
      />

      <Button onClick={() => Clipboard()}>
        <FiCopy />
      </Button>
      {clipboard ? <span className="copy">copied</span> : ""}
      <br />
      <Button type="submit" variant="primary mt-3">
        generator password
      </Button>
    </form>
  );
};

export default FromComponent;
