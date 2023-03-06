import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Team.css";

export default function Team() {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/sherbrooke-bg-cropped.jpeg`);
  const marcsuzannePic = require(`../../assets/images/team/marc-suzanne.jpeg`);
  const danielPic = require(`../../assets/images/team/daniel.jpeg`);
  const francoisHelenePic = require(`../../assets/images/team/francois-helene.jpeg`);
  const nickPic = require(`../../assets/images/team/nick.jpeg`);
  const stephenPic = require(`../../assets/images/team/stephen.jpeg`);
  const brianTanyaPic = require(`../../assets/images/team/brian-tanya.jpeg`);
  const jacobPic = require(`../../assets/images/team/jacob.jpeg`);
  const dyanePic = require(`../../assets/images/team/dyane.jpeg`);
  const joannePic = require(`../../assets/images/team/joanne.jpeg`);
  const davidPic = require(`../../assets/images/team/david.jpeg`);
  const janPic = require(`../../assets/images/team/jan.jpeg`);

  return (
    <>
      <img src={logo} className="img-fluid" alt="logo" />
      <Row>
        <div id="join-title">{t("join-team")}</div>
      </Row>
      <Row className="p-5">
        <Col id="member">
          <Row id="member-picture-container">
            <img src={marcsuzannePic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Marc & Suzanne Peiry</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={danielPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Daniel Peiry</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={francoisHelenePic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">François & Hélène Provost Audet</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={nickPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Nick Gervais</Row>
        </Col>
      </Row>
      <Row className="p-5">
        <Col id="member">
          <Row id="member-picture-container">
            <img src={stephenPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Stephen Goddard</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={brianTanyaPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Brian & Tanya Allat</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={jacobPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Jacob Marcoux</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={dyanePic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Dyane Beaudette</Row>
        </Col>
      </Row>
      <Row className="p-5">
        <Col id="member">
          <Row id="member-picture-container">
            <img src={davidPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">David Bouffard</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={joannePic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Joanne Kingsley</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={janPic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Jan Van Neste</Row>
        </Col>
        <Col id="member">
          <Row id="member-picture-container">
            <img src={dyanePic} id="member-picture" alt="logo" />
          </Row>
          <Row id="member-name">Joel & Rachel Dagenais</Row>
        </Col>
      </Row>
    </>
  );
}
