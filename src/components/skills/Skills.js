import React from "react";
import "./skills.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Skills = () => {
  return (
    <>
      <div className="skills-main" id="skills-id">
        <div className="header-skills">
          <h2 className="heading-skills">Services</h2>
          <hr className="hr-skills" />
        </div>
        <div className="skills-section">
          <div className="right-sec" data-aos="fade-left">
            <div className="experience_content">
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div className="content-text">
                  <h4 className="content-style">Free Wi-Fi</h4>
                  <small className="text-light">
                    Our hotel comes equipped with best Wi-Fi services
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Multi-cuisine Restaurant</h4>
                  <small className="text-light">
                    Our chefs strive hard to serve you the best Chinese,
                    Continental, and Tandoor cuisine.{" "}
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Luxury Rooms</h4>
                  <small className="text-light">
                    We have a wide array of rooms available to satisfy all your
                    accomodation needs.
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <DoneAllIcon className="experience_details_icons" />
                <div>
                  <h4 className="content-style">Online Payments</h4>
                  <small className="text-light">
                    Making the payment hastle free for your stay is one of our
                    top priorty.
                  </small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
