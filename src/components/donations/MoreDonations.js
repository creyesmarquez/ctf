import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Donations.css";

const Gift = () => {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/compassion.png`);

  return (
    <>
      <Row>
        <div className="d-flex justify-content-center">
          <img width="100" src={logo} alt="logo" />
        </div>
        <h2 style={{ display: "grid", placeItems: "center" }}>
          {t("donation-needs")}
        </h2>
        <p id="donation-description">{t("donation-needs-description")}</p>
        <p id="donation-description">{t("donation-needs-contact")}</p>
      </Row>
    </>
  );
};

export function MoreDonations() {
  const { t } = useTranslation();

  return (
    <>
      <Row className="d-flex justify-content-md-center mt-2">
        <Col>
          <p id="donation-title">{t("donation-others")}</p>
        </Col>
      </Row>
      <Row id="more-donations">
        <Gift />
      </Row>
    </>
  );
}
