import React from "react";
import "./Entete.css";
import "boxicons";
import logo from "./logo.png";
const Entete = () => {
  return (
    <div className="entete">
      <a href="" className="logo">
        <img src={logo} alt="taswira" style={{ height: "40px" }} />
      </a>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="icons">
        <box-icon name="menu" id="menu-icon"></box-icon>
        <box-icon name="x" id="close-icon"></box-icon>
      </label>
      <nav className="navbar">
        <a href="" id="title1">
          Home
        </a>
        <a href="" id="title2">
          B Cars
        </a>
        <a href="" id="title3">
          S Cars
        </a>
        <a href="" id="title4">
          Drift Cars
        </a>
        <a href="" id="title5">
          Addon Cars
        </a>
      </nav>
    </div>
  );
};

export default Entete;
