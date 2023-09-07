import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/About.css";

export default function About() {
  const { t } = useTranslation();
  const youngAdultsPicture = require(`../../assets/images/young-adults.jpeg`);
  const presencePicture = require(`../../assets/images/presence-schedule.jpeg`);
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
        <span
          className="border-bottom"
          style={{
            marginTop: "2rem",
          }}
        ></span>
        <div id="services-subtitle">{t("young-adults-title")}</div>
        <Row
          style={{
            padding: "initial",
          }}
        >
          <Col>
            {t("young-adults-1")} <br />
            {t("young-adults-2")} <br />
            {t("young-adults-3")}
            <br />
            <br />
            <div id="young-adults-schedule">
              {youngAdultsDates.map((date) => (
                <div key={date} style={{ padding: "initial" }}>
                  {date} <br />
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <img
              align="center"
              style={{
                maxWidth: "100%",
                minWidth: "300px",
                paddingLeft: "0",
                paddingTop: "1rem",
              }}
              src={youngAdultsPicture}
              alt="logo"
            />
          </Col>
        </Row>
        <span
          className="border-bottom"
          style={{
            marginTop: "2rem",
          }}
        ></span>
        <div>
          <Row>
            <img
              align="center"
              style={{ width: "auto", padding: "0" }}
              src={presencePicture}
              alt="logo"
            />
          </Row>
        </div>
      </Row>
    </>
  );
}
