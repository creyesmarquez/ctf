import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Donations.css";

const Gift = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/compassion.png`);

  return (
    <>
      <Col className="">
        <img width="100" src={logo} alt="logo" />
        <h4>{t("donation-needs")}</h4>
        <p id="donation-description">{t("donation-needs-description")}</p>
      </Col>
    </>
  );
};

const Transfert = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/interac.webp`);

  return (
    <>
      <Col>
        <h4>E-Transfer</h4>
        <p id="donation-description">{t("transfer-description")}</p>
      </Col>
      <Col style={{ display: "contents" }}>
        <img width="150" src={logo} alt="logo" />
      </Col>
    </>
  );
};

const Paypal = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/paypal.png`);

  return (
    <>
      <Col className="p-2">
        <h4>Paypal</h4>
        <p id="donation-description">{t("paypal-description")}</p>
      </Col>
      <Col>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=7DBCL2Z672PNN"
          target="_blank"
          rel="noreferrer"
        >
          <img width="220" border="0" align="center" src={logo} alt="logo" />
        </a>
      </Col>
    </>
  );
};

export default function Donations() {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/test2.png`);
  return (
    <>
      <div id="image-container">
        <img src={logo} class="img-fluid" alt="logo" />
        <div id="centered">{t("donation-centered")}</div>
      </div>
      <Row className="d-flex justify-content-md-center mt-5 ">
        <Col>
          <p id="donation-title">{t("donation-title")}</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-md-center mt-5 p-5">
        <Paypal />
        <Transfert />
        <span className="border-bottom" style={{ marginTop: "inherit" }}></span>
      </Row>
      <Row className="d-flex justify-content-md-center mt-5">
        <Col>
          <p id="donation-title">{t("donation-others")}</p>
        </Col>
      </Row>
      <Row className="text-center p-5">
        <Gift />
        <Gift />
        <Gift />
      </Row>
    </>
  );
}
