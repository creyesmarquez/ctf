import React from "react";
import { Row } from "react-bootstrap";
import "./Separator.css";

const Separator = ({ title, subtitle }) => {
  return (
    <Row id="don-separator-1">
      <Row id="don-separator-1-title"> {title}</Row>
      <Row xs={2} id="don-separator-1-content">
        {subtitle}
      </Row>
    </Row>
  );
};

export default Separator;
