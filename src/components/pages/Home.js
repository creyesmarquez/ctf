import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import video from "../../assets/videos/ctfsherbrooke.mp4#t=0.001";

export default function Home() {
  //const logo = require(`../../assets/images/sherbrooke-bg.jpeg`);
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <div id="title-container">
          <Row id="title" className="d-grid justify-content-md-center mt-2">
            {t("welcome")}
          </Row>
          <Row id="sub-title">
            <Col>
              <p>{t("weekly-reunion")}</p>
            </Col>
          </Row>
        </div>
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
      </Row>
    </>
  );
}
