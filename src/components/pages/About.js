import React from "react";
import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import "../styles/About.css";

export default function About() {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/young-adults.jpeg`);
  const logo2 = require(`../../assets/images/young-adults2.jpeg`);
  const logo3 = require(`../../assets/images/young-adults3.jpeg`);
  const presencePicture = require(`../../assets/images/presence-schedule.jpg`);
  const youngAdultsDates = t("young-adults-4", { returnObjects: true });

  return (
    <>
      <Row
        id="description-services"
        className="d-grid justify-content-md-center"
      >
        <div id="services-title">Services</div>
        <span
          className="border-bottom"
          style={{
            marginTop: "2rem",
          }}
        ></span>
        <div id="services-subtitle">{t("services-langue")}</div>
        {t("services")}
        <div id="services-subtitle"> {t("services-day")}</div>
        {t("services-day-subtitle")} <br />
        {t("services-day-info")}
        <div id="services-subtitle">{t("young-adults-title")}</div>
        {t("young-adults-1")} <br />
        {t("young-adults-2")} <br />
        {t("young-adults-3")}
        <br />
        <br />
        {youngAdultsDates.map((date) => (
          <div style={{ padding: "initial" }}>
            {date} <br />
          </div>
        ))}
        <Row className="mt-5">
          <img
            className="img-fluid"
            style={{ maxWidth: "33%", padding: "0" }}
            src={logo2}
            alt="logo"
          />
          <img
            className="img-fluid"
            style={{ maxWidth: "33%", padding: "0" }}
            src={logo}
            alt="logo"
          />
          <img
            className="img-fluid"
            style={{ maxWidth: "33%", padding: "0" }}
            src={logo3}
            alt="logo"
          />
        </Row>
        <div id="services-subtitle">{t("ignite-group-title")}</div>
        <Row className="">
          <img
            align="center"
            style={{ width: "auto", padding: "0" }}
            src={presencePicture}
            alt="logo"
          />
        </Row>
      </Row>
    </>
  );
}
