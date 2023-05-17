import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ButtonMailto from "../buttons/ButtonMailTo";
import "../styles/Team.css";

export default function Team() {
  const { t } = useTranslation();
  const logo = require(`../../assets/images/sherbrooke-bg-cropped.jpeg`);
  const marcsuzannePic = require(`../../assets/images/team/marc-suzanne.jpeg`);
  const danzoePic = require(`../../assets/images/team/dan-zoe.jpeg`);
  const francoisHelenePic = require(`../../assets/images/team/francois-helene.jpeg`);
  const nickPic = require(`../../assets/images/team/nick.jpeg`);
  const stephenPic = require(`../../assets/images/team/stephen.jpeg`);
  const brianTanyaPic = require(`../../assets/images/team/brian-tanya.jpeg`);
  const jacobPic = require(`../../assets/images/team/jacob.jpeg`);
  const dyanePic = require(`../../assets/images/team/dyane.jpeg`);
  const janPic = require(`../../assets/images/team/jan.jpeg`);
  const joelRachel = require(`../../assets/images/team/joel-rachel.jpeg`);
  const juliePic = require(`../../assets/images/team/julie.jpeg`);

  return (
    <>
      <img src={logo} className="img-fluid" alt="logo" />
      <Col id="members-container">
        <Row id="join-row">
          <div id="join-title">{t("join-team")}</div>
          <ButtonMailto
            label="JOIN"
            mailto="mailto:marc.peiry@catchthefire.com"
          />
        </Row>
        <Row id="member-row">
          <Col id="member">
            <Row id="leader-picture-container">
              <img src={marcsuzannePic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Marc & Suzanne Peiry</Row>
            <Row id="member-title">Senior Leaders</Row>
          </Col>
          <Col id="member">
            <Row id="leader-picture-container">
              <img src={danzoePic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Daniel & Zoé Peiry</Row>
            <Row id="member-title">Operational Managers</Row>
          </Col>
        </Row>
        <Row id="member-row">
          <Col id="member">
            <Row id="member-picture-container">
              <img src={joelRachel} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Joel & Rachel Dagenais</Row>
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
        <Row id="member-row">
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
              <img src={janPic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Jan Van Neste</Row>
          </Col>
        </Row>
        <Row id="member-row">
          <Col id="member">
            <Row id="member-picture-container">
              <img src={juliePic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Julie Brisson</Row>
          </Col>
          <Col id="member">
            <Row id="member-picture-container">
              <img src={dyanePic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Dyane Beaudette</Row>
          </Col>
          <Col id="member">
            <Row id="member-picture-container">
              <img src={jacobPic} id="member-picture" alt="logo" />
            </Row>
            <Row id="member-name">Jacob Marcoux</Row>
          </Col>
        </Row>
        <Row id="member-row"></Row>
      </Col>
    </>
  );
}
