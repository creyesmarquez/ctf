import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { SocialIcons } from "./SocialIcons";
import { UsefulLinks } from "./UsefulLinks";
import { ContactUs } from "./ContactUs";

export const Footer = () => {
  const logo = require(`../../assets/images/primarylogowhitered.png`);
  const { t } = useTranslation();

  return (
    <MDBFooter className="text-center text-lg-start " id="footer-container">
      <SocialIcons />

      <section id="section-footer">
        <MDBContainer className="p-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img src={logo} alt="logo" maxWidth="300" width="300" />
              <p>{t("ctf-footer")}</p>
            </MDBCol>
            <UsefulLinks />
            <ContactUs />
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
