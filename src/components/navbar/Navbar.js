import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import cookies from "js-cookie";
import { LanguageSwitcher } from "./LanguageSwitcher";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link className={isActive ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function SiteLogo() {
  const currentLanguageCode = cookies.get("i18next") || "fr";
  const logo = require(`../../assets/images/sitelogo${currentLanguageCode}.png`);
  return (
    <li>
      <Link to="/" className="site-title-logo">
        <img
          style={{
            height: 49,
            width: 320,
          }}
          src={logo}
          alt="churchLogo"
        />
      </Link>
    </li>
  );
}

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="nav">
      <ul>
        <SiteLogo />
        <CustomLink to="about">{t("About")}</CustomLink>
        <CustomLink to="team">{t("Team")}</CustomLink>
        <CustomLink to="values">{t("Values")}</CustomLink>
        <CustomLink to="contact">{t("Contact")}</CustomLink>
        <CustomLink to="donations">{t("Donations")}</CustomLink>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
