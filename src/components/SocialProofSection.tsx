import "../../public/assets/style.css";

import Ratings from "./Ratings";
import React from "react";
import Testimonials from "./Testimonials";

const MainSection: React.FC = () => {
  return (
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
  );
};

export default MainSection;
