import React from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="contact-main" id="contact-id" data-aos="zoom-in">
        <div className="contact-head">
          <hr className="hr-left" />
          <h2 className="heading-contact">Get In Touch</h2>
          <hr className="hr-contact" />
        </div>
        <div className="contact-div">
          <div className="para">
            <div>
              <div className="content">
                <h4 className="content-style">
                  Our dedicated staffs are available round the clock for any
                  asistance you need related to service or bookings.
                </h4>
              </div>
              <small className="text-light">
                No. 5, Main Rd, Golmuri, Jamshedpur, Jharkhand 831003
              </small>
              <div className="address">
                <EmailIcon
                  className="mail-icons"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=thequestregency@gmail.com"
                    )
                  }
                />
                <small className="text-light">thequestregency@gmail.com</small>
              </div>
              <div className="address">
                <FiPhoneCall />
                <small className="text-light">9955486555</small>
              </div>
            </div>
            {/* </article> */}
          </div>
          <div className="button-style">
            <a
              className="contact-btn"
              href="mailto:thequestregency@gmail.com"
              target="_blank"
            >
              {/* Say hello! */}
              Contact Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
