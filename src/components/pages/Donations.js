import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MoreDonations } from "../donations/MoreDonations";
import "../styles/Donations.css";
import Separator from "../separators/Separator";

const Transfert = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/interac.webp`);

  return (
    <>
      <Row className="mt-5">
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
          className="button"
          href="https://www.paypal.com/donate?hosted_button_id=7DBCL2Z672PNN"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
        <img style={{ width: "150px" }} src={logo} alt="logo" />
      </Row>
    </>
  );
};

export default function Donations() {
  const { t } = useTranslation();
  const crowd = require(`../../assets/images/crowd.jpeg`);
  return (
    <>
      <div id="image-container">
        <img src={crowd} className="img-fluid" alt="logo" />
        <div id="centered">{t("donation-centered")}</div>
      </div>
      <Separator
        title={t("don-separator-1-title")}
        subtitle={t("don-separator-1-content")}
      />
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
