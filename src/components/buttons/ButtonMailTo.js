import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonMailTo.css";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Button
      id="button-mailto"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonMailto;
