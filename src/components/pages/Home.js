import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import video from "../../assets/videos/ctfsherbrooke.mp4#t=0.001";
import Separator from "../separators/Separator";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Separator title={t("welcome")} subtitle={t("weekly-reunion")} />
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
