import React from "react";
import "./ButtonMailTo.css";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <a href={mailto} id="button-mailto">
      {label}
    </a>
  );
};

export default ButtonMailto;
