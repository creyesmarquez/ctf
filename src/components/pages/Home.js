import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import Separator from "../separators/Separator";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { motion, useInView, useAnimate } from "framer-motion";
import { auto } from "@popperjs/core";

export default function Home() {
  const { t } = useTranslation();
  const emergence = t("conference-emergence", { returnObjects: true });
  const conferencePicture = require(`../../assets/images/conference-emergence.png`);
  const carousel1 = require(`../../assets/images/carousel1.jpeg`);
  const carousel2 = require(`../../assets/images/carousel2.jpeg`);
  const carousel3 = require(`../../assets/images/carousel3.jpeg`);
  const carousel4 = require(`../../assets/images/carousel4.jpeg`);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const welcomeWords = t("welcome-description").split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: isInView ? 1 : 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: i * 0.04,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 });
    } else {
      animate(scope.current, { opacity: 0, y: 75 });
    }
  }, [animate, isInView, scope]);
  return (
    <>
      <Row>
        <MDBCarousel showControls showIndicators fade dealy={7000}>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={carousel1}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={carousel2}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={carousel3}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={4}
            src={carousel4}
            alt="..."
          />
        </MDBCarousel>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>

        <Row
          style={{
            margin: auto,
          }}
        >
          <motion.div
            ref={scope}
            id="description"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {welcomeWords.map((word, index) => (
              <motion.span
                style={{
                  marginRight: "5px",
                }}
                key={index}
                variants={child}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </Row>
        <motion.div
          ref={scope}
          variants={{
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
        >
          <Separator title={t("welcome")} subtitle={t("weekly-reunion")} />
        </motion.div>
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
              <div key={info} style={{ padding: "initial" }}>
                {info} <br />
              </div>
            ))}
            <div id="register-button">
              <a
                className="button"
                href="https://lecarrefour.churchcenter.com/registrations/events/1846588"
                target="_blank"
                rel="noreferrer"
              >
                {t("register")}
              </a>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}
