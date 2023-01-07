import React, { useState } from "react";
import "animate.css";
import logo from "../../images/logo.jpeg";
import "../header/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const Header = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const handleOptions = () => {
    setIsMenuToggle(!isMenuToggle);
  };
  return (
    <>
      <div className="main-header">
        <div className="left-header">
          <img
            className="logo animate__animated animate__slideInDown"
            src={logo}
            alt="logo"
          />
        </div>
        {isMobile ? (
          <>
            <div className="hamburger-menu">
              {isMenuToggle ? (
                <CloseIcon onClick={handleOptions} className="cross-icon" />
              ) : (
                <MenuIcon onClick={handleOptions} className="menu-icon" />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="right-header animate__animated animate__slideInDown">
              <a
                className="options animate__animated animate__slideInDown active"
                href="#home-id"
              >
                Home
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#skills-id"
              >
                Services
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#project-id"
              >
                Our Hotel
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#food-id"
              >
                Cuisines
              </a>
              <a
                className="options animate__animated animate__slideInDown"
                href="#contact-id"
              >
                Contact
              </a>
            </div>
          </>
        )}
      </div>
      {isMenuToggle ? (
        <div className="mobile-menu animate__animated animate__slideInDown">
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#home-id"
            >
              Home
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#skills-id"
            >
              Services
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#project-id"
            >
              Our Hotel
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#food-id"
            >
              Cuisines
            </a>
          </div>
          <div className="mt-mb">
            <a
              className="mobile-options animate__animated animate__slideInDown"
              href="#contact-id"
            >
              Contact
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Header;
