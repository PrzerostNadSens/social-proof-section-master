import React from "react";
import StarRatingIcon from "./StarRatingIcon";

const Ratings: React.FC = () => {
  return (
    <div className="ratings">
      <div className="rating">
        <StarRatingIcon numberOfStars={5} /> Rated 5 Stars in Reviews
      </div>
      <div className="rating">
        {" "}
        <StarRatingIcon numberOfStars={5} /> Rated 5 Stars in Report Guru
      </div>
      <div className="rating">
        {" "}
        <StarRatingIcon numberOfStars={5} /> Rated 5 Stars in BestTech
      </div>
    </div>
  );
};

export default Ratings;
