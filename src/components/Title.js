import React from "react";
import "./Title.css";
import churchLogo from "../assets/images/catch-the-fire_église_standard-colour_RGB.png";

function Title() {
  return (
    <div>
      <img
        style={{
          height: 49,
          width: 320,
        }}
        src={churchLogo}
        alt="churchLogo"
      />
    </div>
  );
}

export default Title;
