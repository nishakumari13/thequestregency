import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import EmailIcon from "@mui/icons-material/Email";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer-id">
        <div className="social-icons mobile-footer">
          <BsFacebook
            className="leet-icons"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100089342196032"
              )
            }
          />
          <BsInstagram
            className="code-icons"
            onClick={() =>
              window.open("https://www.instagram.com/thequestregency/")
            }
          />
          <EmailIcon
            className="mail-icons"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=thequestregency@gmail.com"
              )
            }
          />
        </div>

        <div className="info">
          Designed & Built by Pheonix Pixel Technologies
        </div>
        {/* <div className="info">
          <AiOutlineCopyrightCircle />
          <p>2023 All Rights Reserved</p>
        </div> */}
        <div className="stars">
          <AiOutlineStar />
        </div>
      </div>
    </>
  );
};

export default Footer;
