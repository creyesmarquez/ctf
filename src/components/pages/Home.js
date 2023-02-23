import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import video from "../../assets/videos/ctfsherbrooke.mp4";

export default function Home() {
  //const logo = require(`../../assets/images/sherbrooke-bg.jpeg`);
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Row id="title" className="d-grid justify-content-md-center mt-2">
          {t("welcome")}
        </Row>
        <Row id="sub-title">
          <Col>
            <p>{t("weekly-reunion")}</p>
          </Col>
        </Row>
        <video className="videoTag" width="100%" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <Row id="description" className="d-grid justify-content-md-center mt-2">
          {t("welcome-description")}
        </Row>
      </Row>
    </>
  );
}
