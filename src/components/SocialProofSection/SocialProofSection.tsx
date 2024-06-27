import "./SocialProofSection.css";

import Ratings from "../Ratings/Ratings";
import React from "react";
import Testimonials from "../Testimonials/Testimonials";

const MainSection: React.FC = () => {
  return (
    <>
      <div className="background-container">
        <div className="background-top-left"></div>
        <div className="background-bottom-right"></div>
      </div>
      <div className="container">
        <div className="header-and-ratings">
          <div className="header">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <Ratings />
        </div>
        <Testimonials />
      </div>
    </>
  );
};

export default MainSection;
