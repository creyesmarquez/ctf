import React from "react";
import "./styles/Navbar.css";
import churchLogo from "../assets/images/catch-the-fire_église_standard-colour_RGB.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="site-title-logo">
            <img
              style={{
                height: 49,
                width: 320,
              }}
              src={churchLogo}
              alt="churchLogo"
            />
          </Link>
        </li>
        <CustomLink to="about">Nous connaître</CustomLink>
        <CustomLink to="team">Joins l'équipe</CustomLink>
        <CustomLink to="values">Nos valeurs</CustomLink>
        <CustomLink to="contact">Contact</CustomLink>
        <CustomLink to="donations">Dons</CustomLink>
      </ul>
      <h1 className="lang-switcher">TODO LangSwitcher</h1>
    </nav>
  );
}

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

export default Navbar;
