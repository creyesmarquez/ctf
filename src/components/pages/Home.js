import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import video from "../../assets/videos/ctfsherbrooke.mp4#t=0.001";
import Separator from "../separators/Separator";

export default function Home() {
  const { t } = useTranslation();
  const emergence = t("conference-emergence", { returnObjects: true });
  const conferencePicture = require(`../../assets/images/conference-emergence.png`);

  return (
    <>
      <Row>
        <ReactPlayer
          className="react-player"
          url={video}
          loop={true}
          playing={true}
          muted={true}
          width="100%"
          height="auto"
          playsinline={true}
        />
        <Row id="values" className="d-flex justify-content-md-center">
          <Col id="value">
            <Row id="value-title">{t("our-values-1")}</Row>
            <Row id="value-description">{t("our-values-1-description")}</Row>
          </Col>
          <Col id="value">
            <Row id="value-title">{t("our-values-2")}</Row>
            <Row id="value-description">{t("our-values-2-description")}</Row>
          </Col>
          <Col id="value">
            <Row id="value-title">{t("our-values-3")}</Row>
            <Row id="value-description">{t("our-values-3-description")}</Row>
          </Col>
        </Row>
        <Row id="description">{t("welcome-description")}</Row>
        <Separator title={t("welcome")} subtitle={t("weekly-reunion")} />
        <Row id="description">
          <Col>
            <img
              align="center"
              style={{
                maxWidth: "80%",
                minWidth: "300px",
                paddingLeft: "0",
                paddingTop: "1rem",
              }}
              src={conferencePicture}
              alt="logo"
            />
          </Col>
          <Col>
            {emergence.map((info) => (
              <div style={{ padding: "initial" }}>
                {info} <br />
              </div>
            ))}
            <a
              class="button"
              href="https://lecarrefour.churchcenter.com/registrations/events/1846588"
              target="_blank"
              rel="noreferrer"
            >
              {t("register")}
            </a>
          </Col>
        </Row>
      </Row>
    </>
  );
}
