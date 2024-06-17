import React from "react";

interface StarRatingIconProps {
  numberOfStars: number;
}

const StarRatingIcon: React.FC<StarRatingIconProps> = ({ numberOfStars }) => {
  const starsArray = Array.from({ length: numberOfStars });

  return (
    <div className="star-rating-icons">
      {starsArray.map((_, index) => (
        <div className="star-rating-icon"> </div>
      ))}
    </div>
  );
};

export default StarRatingIcon;
