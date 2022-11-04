import React from "react";
import ErrorImage from "../images/404.svg";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <section>
      <div className="error">
        <img src={ErrorImage} alt="ErrorImage" />
        <br />
        <Link to="/">Back Home</Link>
      </div>
    </section>
  );
};
