import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export const Footer = () => {
  const logo = require(`../../assets/images/primarylogowhitered.png`);
  const { t } = useTranslation();

  return (
    <MDBFooter className="text-center text-lg-start " id="footer-container">
      <section className="d-flex justify-content-center p-2 border-bottom">
        <a
          href="https://www.facebook.com/profile.php?id=100064757978766"
          target="_blank"
          without
          rel="noopener noreferrer"
          className="p-3 text-reset"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/ctfsherbrooke/"
          target="_blank"
          without
          rel="noopener noreferrer"
          className="p-3 text-reset"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com/@catchthefiresherbrooke6374"
          target="_blank"
          without
          rel="noopener noreferrer"
          className="p-3 text-reset"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </section>

      <section id="section-footer">
        <MDBContainer className="p-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    maxWidth: 300,
                    width: 300,
                  }}
                />
              </h6>
              <p>{t("ctf-footer")}</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("useful-links")}
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  {t("back-to-top")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t("contact-us")}</h6>
              <p>
                <FontAwesomeIcon icon={faHouse} className="me-2" />
                Sherbrooke, Quebec J1M 1K4
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                daniel.peiry@catchthefire.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                (819) 565-2034
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
