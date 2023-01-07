import React from "react";
import "./projects.css";
import SwiperContainer from "./SwiperContainer";

const Projects = () => {
  return (
    <>
      <div className="project-main" id="project-id">
        <div className="header-proj">
          <h2 className="heading-proj">Our Hotel</h2>
          <hr className="hr-proj" />
        </div>
        <div className="inner">
          <div className="left">
            <SwiperContainer />
          </div>
          <div className="right">
            <p className="text">
              The luxury life is now available at affordable prices.{" "}
              <span className="designation">"Quest Regency" </span>
              located at the heart of Jamshedpur City offers you the best stays.
            </p>
            <p className="text">
              Our 14 magnificent air-conditioned rooms were created with your
              comfort and convenience in mind. If you are looking for a soothing
              and refreshing stay. The perfect getaway couldn't be any better.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
