import React from "react";
import StarRatingIcon from "./StarRatingIcon";

interface RatingData {
  text: string;
  numberOfStars: number;
}

const ratingsData: RatingData[] = [
  { text: "Rated 5 Stars in Reviews", numberOfStars: 5 },
  { text: "Rated 5 Stars in Report Guru", numberOfStars: 5 },
  { text: "Rated 5 Stars in BestTech", numberOfStars: 5 },
];

const Ratings: React.FC = () => {
  return (
    <div className="ratings">
      {ratingsData.map((rating, index) => (
        <div
          key={index}
          className="rating"
          style={{ "--index": index + 1 } as React.CSSProperties}
        >
          <StarRatingIcon numberOfStars={rating.numberOfStars} />
          {rating.text}
        </div>
      ))}
    </div>
  );
};

export default Ratings;
