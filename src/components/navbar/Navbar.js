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
    <li
      className="nav-item"
      id="nav-item"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <Link
        className={isActive ? "nav-link active" : "nav-link"}
        to={to}
        id="nav-link"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

function SiteLogo() {
  const currentLanguageCode = cookies.get("i18next") || "fr";
  const logo = require(`../../assets/images/sitelogo${currentLanguageCode}.png`);
  return (
    <Link to="/" className="navbar-brand">
      <img
        style={{
          maxWidth: 300,
          width: 300,
        }}
        src={logo}
        alt="churchLogo"
      />
    </Link>
  );
}

function Navbar() {
  const { t } = useTranslation();
  return (
    <div id="header">
      <div
        className="close-navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <SiteLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <CustomLink to="about">{t("About")}</CustomLink>
            <CustomLink to="team">{t("Team")}</CustomLink>
            <CustomLink to="values">{t("Values")}</CustomLink>
            <CustomLink to="contact">{t("Contact")}</CustomLink>
            <CustomLink to="donations">{t("Donations")}</CustomLink>
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
