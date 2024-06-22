import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import black_logo from "../../assets/black-logo.png";
import white_logo from "../../assets/white-logo.png";
import menu_icon from "../../assets/menu-icon.png";
import nig_flag_icon from "../../assets/nig-flag-icon.png";
import sa_flag_icon from "../../assets/sa-flag-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [logo, setLogo] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setLogo(true) : setLogo(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={`${logo ? black_logo : white_logo}`} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link className={`btn ${sticky ? "dark-btn" : ""}`} to="/contact">
            Contact us
          </Link>
        </li>
        <li>
          <div className="flag">
            <Link to="/">
              <img src={nig_flag_icon} alt="" />
            </Link>
            <Link to="https://njm-ht-ndt.co.za/">
              <img src={sa_flag_icon} alt="" />
            </Link>
          </div>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
