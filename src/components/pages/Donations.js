import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MoreDonations } from "../donations/MoreDonations";
import "../styles/Donations.css";

const Transfert = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/interac.webp`);

  return (
    <>
      <Row>
        <h4>E-Transfer</h4>
        <p id="donation-description">{t("transfer-description")}</p>
      </Row>
      <Row>
        <img
          className="img-fluid"
          style={{ width: "150px" }}
          src={logo}
          alt="logo"
        />
      </Row>
    </>
  );
};

const Paypal = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/paypal.png`);

  return (
    <>
      <Row>
        <h4>Paypal</h4>
        <p id="donation-description">{t("paypal-description")}</p>
      </Row>
      <Row>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=7DBCL2Z672PNN"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-fluid"
            width="220"
            align="center"
            src={logo}
            alt="logo"
          />
        </a>
      </Row>
    </>
  );
};

export default function Donations() {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/test2.png`);
  return (
    <>
      <div id="image-container">
        <img src={logo} className="img-fluid" alt="logo" />
        <div id="centered">{t("donation-centered")}</div>
      </div>
      <Row id="don-separator-1">
        <Row id="don-separator-1-title"> {t("don-separator-1-title")}</Row>
        <Row xs={2} id="don-separator-1-content">
          {" "}
          {t("don-separator-1-content")}
        </Row>
      </Row>

      <Row className="d-flex justify-content-md-center mt-5 ">
        <Col>
          <p id="donation-title">{t("donation-title")}</p>
        </Col>
      </Row>
      <Row className="mt-2 mb-2 p-5">
        <Paypal />
        <Transfert />
        <span className="border-bottom" style={{ marginTop: "3rem" }}></span>
      </Row>
      <MoreDonations />
    </>
  );
}
