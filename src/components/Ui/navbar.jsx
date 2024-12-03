import React, { useState } from "react";
import "../style/navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Nikhil <span className="navbar-sign">Singh</span>
        </Link>
      </h1>

      {/* Desktop */}

      <ul className="navbar-items">
        <NavLink to="/" className="navbar-links">
          <li>Home</li>
        </NavLink>
        <NavLink to="/skills" className="navbar-links">
          <li>Skills</li>
        </NavLink>
        <NavLink to="/tools" className="navbar-links">
          <li>Tools</li>
        </NavLink>
        <NavLink to="projects" className="navbar-links">
          <li>Project</li>
        </NavLink>
        <NavLink to="resume" className="navbar-links">
          <li>Resume</li>
        </NavLink>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} />
        <Link to="/form">Form</Link>
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/skills">
            <li>Skills</li>
          </NavLink>
          <NavLink to="/tolls">
            <li>Tools</li>
          </NavLink>
          <NavLink to="projects">
            <li>Project</li>
          </NavLink>
          <NavLink to="resume">
            <li>Resume</li>
          </NavLink>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
