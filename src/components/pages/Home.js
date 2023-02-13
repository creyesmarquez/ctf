import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";

import "../styles/Home.css";

export default function Home() {
  const logo = require(`../../assets/images/sherbrooke-bg.jpeg`);
  const { t } = useTranslation();

  return (
    <>
      <Row className="d-grid justify-content-md-center mt-5" id="title">
        <h1>
          <strong>{t("welcome")}</strong>
        </h1>
      </Row>
      <Row className="" id="description" xs lg="2">
        <Col>
          <p>{t("welcome-description")}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={logo} className="img-fluid shadow-4" alt="logo" />
          <img src={logo} alt="logo" style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
    </>
  );
}
