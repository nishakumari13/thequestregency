import React from "react";
import "../home/home.css";
import "animate.css";
import hotel from "../../images/hotel.jpeg";
import EmailIcon from "@mui/icons-material/Email";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";

const Home = () => {
  return (
    <>
      <div className="home" id="home-id">
        {isMobile ? (
          ""
        ) : (
          <div className="home-icons">
            <hr className="hr" />
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
            <hr className="hr" />
          </div>
        )}
        <div>
          <div className="inner-container">
            {isMobile ? (
              <>
                <div className="left-container">
                  <img
                    className="hotel animate__animated animate__slideInDown"
                    src={hotel}
                    alt="hotel"
                  />
                </div>
                <div className="right-container animate__animated animate__slideInUp">
                  <div>
                    <p className="text">
                      <span className="designation">"Quest Regency" </span>
                      is a premium boutique hotel with plush rooms and a
                      luxurious multi-cuisine restaurant-{" "}
                      <span className="designation">'Oasis'</span>.
                    </p>

                    <p className="text">
                      The property stands stylishly in{" "}
                      <span className="company"> Golmuri </span>, a vibrant
                      business centre located centrally in the industrial city
                      of Jamshedpur, and aligns perfectly with the
                      contemporary-cosmopolitan culture of the city.
                    </p>
                  </div>
                  <div className="button-div">
                    <a className="contact" href="#contact-id">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="right-container animate__animated animate__slideInUp">
                  <div>
                    <p className="text">
                      <span className="designation">"Quest Regency" </span>
                      is a premium boutique hotel with plush rooms and a
                      luxurious multi-cuisine restaurant-{" "}
                      <span className="designation">'Oasis'</span>.
                    </p>

                    <p className="text">
                      The property stands stylishly in{" "}
                      <span className="company"> Golmuri </span>, a vibrant
                      business centre located centrally in the industrial city
                      of Jamshedpur, and aligns perfectly with the
                      contemporary-cosmopolitan culture of the city.
                    </p>
                  </div>
                  <div className="button-div">
                    <a className="contact" href="#contact-id">
                      Get In Touch
                    </a>
                  </div>
                </div>
                <div className="left-container">
                  <img
                    className="hotel animate__animated animate__slideInDown"
                    src={hotel}
                    alt="hotel"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
