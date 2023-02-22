import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";

export default function Home() {
  const logo = require(`../../assets/images/sherbrooke-bg.jpeg`);
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Row id="title" className="d-grid justify-content-md-center mt-5">
          {t("welcome")}
        </Row>
        <Row className="" id="description" xs lg="2">
          <Col>
            <p>{t("weekly-reunion")}</p>
          </Col>
        </Row>
      </Row>
      <img src={logo} className="img-fluid" alt="logo" />
    </>
  );
}
